export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context;

  // Basic CORS (safe for same-origin; also fine if you test locally)
  const corsHeaders = {
    "Access-Control-Allow-Origin": request.headers.get("Origin") || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ message: "Email is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const trimmed = email.trim();
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
    const url = `https://api.convertkit.com/v3/forms/${CK_FORM_ID}/subscribe`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: CK_API_KEY,
        email: trimmed,
      }),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      return new Response(
        JSON.stringify({
          message: data?.message || "Kit subscribe failed.",
          details: data,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ message: "Unexpected error." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
}

// Handle preflight if you ever submit cross-origin (optional)
export async function onRequestOptions(context: any): Promise<Response> {
  const { request } = context;
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": request.headers.get("Origin") || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}