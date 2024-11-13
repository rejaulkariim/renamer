import { GetWishlist } from "@/server/actions/wishlist.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
};

const WishlistesPage = async () => {
  const wishlists = await GetWishlist();

  return (
    <section className="px-4 md:px-6">
      <h2 className="font-extrabold">Wishlist</h2>
      <div>
        {wishlists.data.map((wishlist) => (
          <div key={wishlist.id}>
            <p>{wishlist.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishlistesPage;
