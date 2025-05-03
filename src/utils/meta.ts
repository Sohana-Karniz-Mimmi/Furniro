import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Furniro",
    template: "%s | Furniro - Your Marketplace for Bulk Products",
  },
  description:
    "Furniro - Your Ultimate Destination for Trendy Shopping! Explore a wide range of products, from fashion to electronics, all in one place. Enjoy seamless browsing, secure payments, and fast delivery. Shop smarter, shop happier with Furniro!",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Furniro - Your Marketplace for Bulk Products",
    description:
      "Furniro - Your Ultimate Destination for Trendy Shopping! Explore a wide range of products, from fashion to electronics, all in one place. Enjoy seamless browsing, secure payments, and fast delivery. Shop smarter, shop happier with Furniro!",
    url: "https://www.furniro.com",
    siteName: "Furniro",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Furniro - Your Marketplace for Bulk Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const getPageMetaData = (pageName: string) => {
  return {
    ...metadata,
    title: {
      default: pageName,
      template: "%s | Furniro - Your Marketplace for Bulk Products",
    },
  };
};
