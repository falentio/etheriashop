export type Product = {
    name: string
    gender: "male" | "female"
    server: "asia" | "global"
    status: "ready" | "sold"
    character: string
    id: number
    images: string[]
}

export async function getProducts(secret: string, id: string): Promise<Product[]> {
    const resp = await fetch("https://api.notion.com/v1/databases/" + id + "/query", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${secret}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        }
    })
    const data = await resp.json()
    return data.results.map((result: any) => ({
        name: result.properties["Account Name"].title[0].plain_text,
        gender: result.properties.Gender.select.name,
        server: result.properties.server.select.name,
        status: result.properties.Status.select.name,
        character: result.properties.Characters.rich_text[0].plain_text,
        id: result.properties.id.unique_id.number,
        images: result.properties["Files & media"].files.map((file: any) => file.file.url || "https://profile.iforana.com/api/collection/elemental-cat-v0/" + result.properties.id.unique_id.number).concat("https://profile.iforana.com/api/collection/elemental-cat-v0/" + result.properties.id.unique_id.number),
    }))
}