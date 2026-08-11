let products = [];

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    return Response.json({
        message: `Hello ${name}`
    });
}

export async function POST(req) {
    const data = await req.json();

    products.push(data);

    return Response.json({
        message:"Product created",
        data:data
    })
}