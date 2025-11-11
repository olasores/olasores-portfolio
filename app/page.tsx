import HomeSection from "./components/HomeSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <HomeSection />
      <Contact />
    </div>
  );
}
