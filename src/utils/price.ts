// import { ProductPrice } from "@/types/products";

import { Product } from "@/types/products";

// export const getDiscountPercentage = (price: ProductPrice): number | null => {
//   if (!price.originalPrice || price.originalPrice === price.currentPrice) {
//     return null;
//   }
//   return Math.round(
//     ((price.originalPrice - price.currentPrice) / price.originalPrice) * 100
//   );
// };

// Usage:
//   const discount = getDiscountPercentage(product.price);
// utils/product.ts
export const generateProductBadge = (product: Product): Product["badge"] => {
  // 1. Discount badge
  if (
    product.price?.originalPrice &&
    product.price.originalPrice > product.price.currentPrice
  ) {
    const discount = Math.round(
      ((product.price.originalPrice - product.price.currentPrice) /
        product.price.originalPrice) *
        100
    );

    if (discount > 0) {
      return {
        type: "discount",
        text: `-${discount}%`,
        color: "red",
      };
    }
  }

  // 2. New product badge (created within last 7 days)
  if (product.createdAt) {
    const daysSinceCreation = Math.floor(
      (Date.now() - new Date(product.createdAt).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    if (daysSinceCreation <= 7) {
      return {
        type: "new",
        text: "NEW",
        color: "green",
      };
    }
  }

  // 3. No badge
  return undefined;
};
