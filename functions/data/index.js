// functions/data/index.js
export async function onRequest(context) {
  const ENCRYPTED_HTML = context.env.ENCRYPTED_HTML;
  if (!ENCRYPTED_HTML) {
    return new Response(
      JSON.stringify({ error: "Server config missing." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(
    JSON.stringify({ cipher: ENCRYPTED_HTML }),
    { 
      status: 200, 
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      } 
    }
  );
}