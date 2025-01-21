import { ClientFooter } from "@/components/ClientFooter";
import { ClientHeader } from "@/components/ClientHeader";
import { PresentationBlock } from "@/components/layout/PresentationBlock";
import { ProjectsWrapper} from "@/components/layout/ProjectsWrapper";

export default function Home() {
  return (
    <div className='p-5'>
      <PresentationBlock />
      <ProjectsWrapper />
    </div>
  );
}
