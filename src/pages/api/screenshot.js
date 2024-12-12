export async function GET({ request }) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
  
    console.log("Extracted URL:", url);
  
    if (!url) {
      return new Response("Missing 'url' parameter", { status: 400 });
    }
  
    // Example of fetching from ApiFlash
    const API_KEY = "80112e6173b54cd98408b42d0f0aa693";
    const APIFLASH_ENDPOINT = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${url}`;
  
    try {
      const response = await fetch(APIFLASH_ENDPOINT);
      if (!response.ok) {
        throw new Error("Failed to fetch screenshot from ApiFlash");
      }
  
      const imageBuffer = await response.arrayBuffer();
  
      return new Response(imageBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "no-store",
        },
      });
    } catch (error) {
      console.error("Error fetching screenshot:", error);
      return new Response("Error generating screenshot", { status: 500 });
    }
  }
  