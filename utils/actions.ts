import db from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  const products = await db.products.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
  return db.products.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.products.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};
