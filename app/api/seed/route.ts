import db from "@/utils/db";
import products from "@/utils/products.json";

export async function GET() {
  await db.product.createMany({
    data: products,
  });

  return Response.json({ message: "Data inserted 🚀" });
}
