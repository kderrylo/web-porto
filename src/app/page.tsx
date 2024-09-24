"use client";

import Navbar from "./components/navbar";
import {Footer} from "./components/footer";
import Dashboard from "./components/dashboard";
import About from "./components/about";
import Projects from "./components/projects";

import {ParallaxProvider} from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="bg-navbar text-light">
        <Navbar />
        <Dashboard />
        <About />
        <Projects />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
