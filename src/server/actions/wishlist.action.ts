"use server";

import { db } from "@/lib/db";
import { TWishlistParams } from "@/types";

export async function CreateWishlist(params: TWishlistParams) {
  const { email } = params;

  const existingEmail = await db.wishlist.findUnique({
    where: { email },
  });

  if (existingEmail) {
    return {
      status: 409,
      success: false,
      message: "Email already subscribed to the wishlist.",
    };
  }

  await db.wishlist.create({
    data: {
      email,
    },
  });

  return {
    status: 201,
    success: true,
    message: "You've joined the waitlist successfully.",
  };
}

export const GetWishlist = async () => {
  const wishlist = await db.wishlist.findMany();

  return {
    status: 200,
    success: true,
    message: "Wishlist retrieved successfully.",
    data: wishlist,
  };
};
