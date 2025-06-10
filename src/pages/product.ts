import { getProducts } from "@/utils/notion";
import { getSecret } from "astro:env/server";
import { buildSrc } from "@imagekit/javascript"
export async function GET({ request }: { request: Request }) {
    if (!getSecret("NOTION_SECRET") || !getSecret("NOTION_DATABASE")) {
        return new Response("Notion secret or ID not found", {
            status: 500,
        });
    }
    const products = await getProducts(getSecret("NOTION_SECRET")!, getSecret("NOTION_DATABASE")!);
    for (const product of products) {
        product.images = product.images.map(image => {

            const url = "http://" + request.url.split("/")[2] + "/image/" + btoa(image)
            if (import.meta.env.DEV) {
                return url
            }
            return buildSrc({
                urlEndpoint: getSecret("IMAGEKIT_ENDPOINT")!,
                src: "/" + url,
                transformation: [
                    {
                        width: 256,
                        height: 256,
                        quality: 80
                    }
                ],
                transformationPosition: "path"
            })
        })
    }
    return new Response(JSON.stringify(products), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=10, stale-while-revalidate=60",
        },
    });
}