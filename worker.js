export default {
  async fetch(request) {
    const url = new URL(request.url);
    const TELEGRAM = "https://api.telegram.org" + url.pathname + url.search;

    const response = await fetch(TELEGRAM, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" ? null : await request.arrayBuffer()
    });

    const newResponse = new Response(response.body, response);
    newResponse.headers.set("Access-Control-Allow-Origin", "*");
    return newResponse;
  }
};
