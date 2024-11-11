"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { wishlistValidationSchema } from "@/lib/validations/wishlist.validation";
import { CreateWishlist } from "@/server/actions/wishlist.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Icons } from "../shared/Icons";

const WishlistForm = () => {
  const [loading, setLoading] = useState(false);

  // 1. Define the form.
  const form = useForm<z.infer<typeof wishlistValidationSchema>>({
    resolver: zodResolver(wishlistValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof wishlistValidationSchema>) => {
    try {
      setLoading(true);
      const response = await CreateWishlist({ email: values.email });

      if (!response.success) {
        toast.error(response.message, { duration: 3000 });
      }

      toast.success(response.message, { duration: 3000 });
      form.reset();
    } catch (error: unknown) {
      toast.error(error as string);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} className="h-10" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className={`flex items-center ${
            loading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <Icons.loader className="animate-spin mr-2" aria-hidden="true" />
              <span className="sr-only">Sending...</span>
              Sending...
            </>
          ) : (
            "Get Notified"
          )}
        </Button>
      </form>
    </Form>
  );
};
export default WishlistForm;
