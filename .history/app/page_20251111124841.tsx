import HomeSection from "./components/HomeSection";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <HomeSection />
      <Portfolio />
    </div>
  );
}
