import { useMemo, useState } from "react";

export function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    try {
      // await new Promise((r) => setTimeout(r, 700));
      // setStatus("success");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Subscribe failed.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
      }
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onMouseDown={(e) => {
        // optional: click outside to close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#111] border border-white/10 rounded-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-white mb-2">Join Early Access</h2>
        <p className="text-white/60 mb-6">
          Be first to access limited AltMe series when we launch on Kickstarter.
        </p>

        {status === "success" ? (
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <p className="text-white font-medium">You’re on the list ✅</p>
            <p className="text-white/60 text-sm mt-1">
              We’ll notify you before public launch.
            </p>
            <button
              onClick={onClose}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-black/40 border border-white/10 px-4 py-3 rounded-md text-white outline-none focus:border-blue-500/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-md transition"
            >
              {status === "loading" ? "Saving..." : "Secure My Spot"}
            </button>

            <p className="text-xs text-white/40">No spam. One email at launch.</p>
          </form>
        )}
      </div>
    </div>
  );
}