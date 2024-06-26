import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../css/tailwind.css";

import Head from "next/head";

import { Space_Grotesk } from "next/font/google";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "./theme-provider";
import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});
export const metadata: Metadata = {
  title: "Himanshu Joshi",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{"Portfolio"}</title>
        <meta name="description" content={"Himanshu Joshi"} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <html
        lang={siteMetadata.language}
        className={`${space_grotesk.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <body className="bg-white pl-[calc(80vw-80%)] text-black antialiased dark:bg-gray-800/25 dark:text-white">
          <ThemeProviders>
            <SectionContainer>
              <div className="flex h-screen flex-col justify-between font-sans">
                <Header />
                <main className="mb-auto">{children}</main>
                <Footer />
              </div>
            </SectionContainer>
          </ThemeProviders>
        </body>
      </html>
    </>
  );
}
