import "./globals.css";
import { unstable_getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";
import Login from "components/Login";
import Navbar from "components/Navbar";
import Script from "next/script";
import Footer from "components/Footer";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  const providers = await getProviders();
  console.log(session);

  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>Reflections</title>
        <link rel="manifest" href="/manifest.json"></link>
      </head>
     
    </html>
  );
}
