import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";
const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const { userId } = await auth();

  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm productId={productId} favoriteId={favoriteId} />;
};

export default FavoriteToggleButton;
