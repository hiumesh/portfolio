import ProjectsSectionOne from "./section-1";
import ProjectCard from "./projectCard";
import { domain } from "../config";

export interface Project {
  _id: string;
  title: string;
  technologies_used: string[];
  description: string;
  demo_images: string[];
  deploy_link: string;
}

async function getProjects() {
  const res = await fetch(domain+"/api/projects", {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log("failed to fetch projects data");
    return [];
  }

  const responseData = await res.json();
  return responseData.data.projects as Project[];
}

export default async function Projects() {
  const projects = await getProjects();;

  return (
    <main className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <ProjectsSectionOne />
      <div>
        {projects.map((p) => <ProjectCard key={p._id}  data={p} />)}
      </div>
    </main>
  );
}