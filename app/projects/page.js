import React from "react";
import { ProjectCards } from "../components/projectCards/ProjectCards";
import projects from "../lib/data";

export const metadata = {
  title: "Edric | Projects",
};

export default function Projects() {
  return (
    <main className="translate-y-16 w-full h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4">
      <div className=" h-full w-full mx-auto">
        {
          projects.map((p) => (
            <ProjectCards key={p.ID} title={p.Title} src={p.Img_URL} desc={p.Description} stack={p.Stack} link={p.Link}/>
          ))
        }
      </div>
    </main>
  );
}
