"use client";
import Spline from "@splinetool/react-spline";
import { Card, CardTitle, CardDescription, HoverEffect } from "../components/ui/card-hover-effect";
import ExploreButton from "../components/button/ExploreButton"

export default function Home() {
  const items = [
    {
      title: "Card 1",
      description: "This is card 1.",
      link: "/",
    },
    {
      title: "Card 2",
      description: "This is card 2.",
      link: "/",
    },
    {
      title: "Card 3",
      description: "This is card 3.",
      link: "/",
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
        <h2 className="text-3xl font-bold mb-6 text-center">Topik Pembelajaran</h2>
        <HoverEffect items={items} />
      </section>
    </div>
  );
}
