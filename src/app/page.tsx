import { Hero } from "@/components/sections/Hero";
import { HomeSkills } from "@/components/sections/HomeSkills";
import { HomeProjects } from "@/components/sections/HomeProjects";
import { ToolMarquee } from "@/components/ui/ToolMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolMarquee />
      <HomeProjects />
      <HomeSkills />
    </>
  );
}
