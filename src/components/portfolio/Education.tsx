import { ResumeCard } from "@/components/portfolio/ResumeCard";

interface Education {
  school: string;
  href?: string;
  logoUrl: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
}

interface EducationProps {
  educations: readonly Education[];
}

export default function Education({ educations }: EducationProps) {
  return (
    <div className="flex flex-col gap-y-3">
      {educations.map((education,idx) => (
        <ResumeCard
          // isExpandedShow={idx===0}
          key={education.school}
          href={education.href}
          logoUrl={education.logoUrl}
          altText={education.school}
          title={education.school}
          subtitle={education.degree}
          period={`${education.start} - ${education.end}`}
          location={education.location}
        />
      ))}
    </div>
  );
}
