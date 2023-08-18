"use client";
import HighlightWrapper from "@/components/highlighter/CodeBlock";
import HeroSection from "@/components/sections/HeroSection";
import MyComponent from "./MyComponent";

export default function Home() {
  return (
    <main>
      {/* <HeroSection id="hero" bgColor="bg-slate-400" /> */}
      <MyComponent />
    </main>
  );
}
