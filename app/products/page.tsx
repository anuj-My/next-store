import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const resolvedParams = await searchParams;

  const layout = resolvedParams.layout || "grid";
  const search = resolvedParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;
