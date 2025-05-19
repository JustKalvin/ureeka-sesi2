"use client";
import Spline from "@splinetool/react-spline";
import {HoverEffect } from "../components/ui/card-hover-effect";
import ExploreButton from "../components/button/ExploreButton"
// import { FloatingNav } from "../components/ui/floating-navbar"; // ganti path sesuai lokasimu


export default function Home() {
  const items = [
    {
      title: "About Me",
      description: "Click to see about me",
      link: "https://ureeka-sesi2.vercel.app/pages/about/",
    },
    {
      title: "Project",
      description: "Click to see the project I've done",
      link: "https://ureeka-sesi2.vercel.app/pages/project/",
    },
    {
      title: "Resume",
      description: "Click to see my resume",
      link: "https://ureeka-sesi2.vercel.app/pages/resume/",
    },
  ];
  

  return (
    <div className="min-h-screen bg-black text-white space-y-16 p-8">
      
      <div className="w-full h-[400px] relative">
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <ExploreButton />
        </div>
        <Spline scene="https://prod.spline.design/l82qfzhFZ7-A7KaY/scene.splinecode" />
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Portofolio</h2>
        <HoverEffect items={items} />
      </section>
    </div>
  );
}
