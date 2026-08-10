import ProjectOverview from '@/components/projectDetails/ProjectOverview';
import CaseStudySections from '@/components/projectDetails/CaseStudySections';
import SolutionResultSection from '@/components/projectDetails/SolutionResultSection';

const WorkDetailPage = () => {
    return (
        <div>
            <ProjectOverview />
            <CaseStudySections />
            <SolutionResultSection />
        </div>
    );
}

export default WorkDetailPage;
