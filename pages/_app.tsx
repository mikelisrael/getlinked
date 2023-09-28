import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  // initialize the animation library
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      // make animation happen sooner
      // offset: 80,
    });
  }, []);

  return (
    <>
      <Head>
        <title>GetLinked</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta name="title" content="Igniting a Revolution in HR Innovation" />
        <meta
          name="description"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future."
        />
        <meta
          name="keywords"
          content="Tech Hackathon, Visionaries, Future-shaping, Innovation, Technology, Creative Minds, Hackathon Event, Visionary Ideas, Future Innovation, Collaboration, Problem-solving, Tech Enthusiasts, Innovation Catalyst, Future Vision, Technology Trends, Ideation, Creative Solutions, Tech Community, Problem Solvers, Future Tech Challenges"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Michael Israel" />

        {/* more SEO */}
        <meta name="theme-color" content="#150E28" />
        <meta name="msapplication-TileColor" content="#150E28" />
        <meta
          name="msapplication-TileImage"
          content="https://www.flamestar.co/img/preview_sq.png"
        />
        <meta name="application-name" content="Getlinked" />
        <meta name="apple-mobile-web-app-title" content="Getlinked" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* open graph */}
        {/* Facebook Meta Tags  */}
        {/* <meta property="og:url" content="https://www.flamestar.co/" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Getlinked - Hackathon" />
        <meta
          property="og:description"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future."
        />
        <meta
          property="og:image"
          content="https://getlinked-lime.vercel.app/img/OG_CARD.png"
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:domain" content="flamestar.co" /> */}
        {/* <meta property="twitter:url" content="https://www.flamestar.co/" /> */}
        <meta name="twitter:title" content="Getlinked - Hackathon" />
        <meta
          name="twitter:description"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future."
        />
        <meta
          name="twitter:image"
          content="https://getlinked-lime.vercel.app/img/OG_CARD.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/icon_favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/icon_favicon/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/icon_favicon/favicon.ico" />
      </Head>

      <Navbar />

      <div className="relative grid min-h-screen grid-rows-[1fr,auto] w-full max-w-full min-w-0">
        <main className="relative">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Slide}
        theme="colored"
      />

      <Analytics />
    </>
  );
}
