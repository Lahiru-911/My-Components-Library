"use client";
import Footer from "@/components/StickyFooter/Footer1";
import Intro from "@/components/StickyFooter/Intro";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Footer />
      {/* <Footer2/> */}
    </main>
  );
}
