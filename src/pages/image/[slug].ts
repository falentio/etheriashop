export const prerender = false
export async function GET({ params }: { params: { slug: string } }) {
    const url = atob(params.slug)
    return Response.redirect(url)
}