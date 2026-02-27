export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context;

  const origin = request.headers.get("Origin") || "*";

  // Robust CORS (safe for same-origin; also fine for local testing)
  const corsHeaders = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };

  try {
    // Parse request body safely
    let body: any = null;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ message: "Invalid JSON body." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const email = body?.email;

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ message: "Email is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const trimmed = email.trim().toLowerCase();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      return new Response(JSON.stringify({ message: "Invalid email." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const CK_API_KEY = env.CK_API_KEY;
    const CK_FORM_ID = env.CK_FORM_ID;

    if (!CK_API_KEY || !CK_FORM_ID) {
      return new Response(
        JSON.stringify({ message: "Server is missing CK_API_KEY or CK_FORM_ID." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Kit/ConvertKit v3 subscribe-to-form endpoint
    const url = `https://api.convertkit.com/v3/forms/${encodeURIComponent(
      CK_FORM_ID
    )}/subscribe`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: CK_API_KEY,
        email: trimmed,
      }),
    });

    // ✅ Safer: read text first, then parse JSON if possible
    const raw = await r.text();
    let data: any = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      data = { raw };
    }

    if (!r.ok) {
      return new Response(
        JSON.stringify({
          message: data?.message || "Kit subscribe failed.",
          upstreamStatus: r.status,
          details: data,
        }),
        {
          // ✅ upstream error, not client input error
          status: 502,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({
        message: "Unexpected error.",
        details: String(e?.message ?? e),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
}

// Handle preflight
export async function onRequestOptions(context: any): Promise<Response> {
  const { request } = context;
  const origin = request.headers.get("Origin") || "*";

  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
    },
  });
}