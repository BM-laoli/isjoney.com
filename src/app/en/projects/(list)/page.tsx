import { generateProjectsJsonLd } from "@/app/jsonld"; // 如果有的话
import { ProjectCard } from "@/components/projects/ProjectCard";
import { BlurFade } from "@/components/ui/BlurFade";
import { BLUR_FADE_DELAY, DATA } from "@/data";
import { getContentList } from "@/lib/content";
import { jsonldScript } from "@/lib/utils";

export default async function ProjectsPage() {
  const projects = await getContentList('projects');
  const projectsJsonLd = generateProjectsJsonLd(projects);

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 xl:pt-40">
      {jsonldScript(projectsJsonLd)}
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 md:px-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-4 text-3xl font-semibold tracking-tighter md:text-4xl">
            Projects
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl text-sm md:text-base">
            {DATA.projectInfo.description}
          </p>
        </BlurFade>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {projects.map((project, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * (2 + id)} key={project.slug}>
              <ProjectCard
                slug={project.slug}
                title={project.metadata.title}
                summary={project.metadata.summary}
                tech={project.metadata.tech}
                status={project.metadata.status}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}