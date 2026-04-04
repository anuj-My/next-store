import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  const products = await db.products.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = () => {
  return db.products.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
