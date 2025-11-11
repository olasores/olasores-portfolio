import Image from "next/image";
import HomeSection from "./components/HomeSection";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black top-">
      <HomeSection />
      <Portfolio />
    </div>
  );
}
