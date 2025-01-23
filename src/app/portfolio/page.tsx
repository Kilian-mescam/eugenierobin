import { PresentationBlock } from "@/components/layout/PresentationBlock";
import { ProjectsWrapper } from "@/components/layout/ProjectsWrapper";

export default function Home() {
    return (
      <div className='p-5'>
        <PresentationBlock />
        <ProjectsWrapper />
      </div>
    );
  }