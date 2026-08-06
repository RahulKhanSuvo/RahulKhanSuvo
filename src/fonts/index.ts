import localFont from "next/font/local";

export const humane = localFont({
  src: [
    {
      path: "./humane/Humane-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./humane/Humane-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./humane/Humane-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./humane/Humane-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "./neue-montreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./neue-montreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./neue-montreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./neue-montreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./neue-montreal/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./neue-montreal/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./neue-montreal/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
