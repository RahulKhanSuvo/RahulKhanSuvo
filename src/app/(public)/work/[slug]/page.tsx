import ProjectOverview from '@/components/projectDetails/ProjectOverview';
import CaseStudySections from '@/components/projectDetails/CaseStudySections';
import SolutionResultSection from '@/components/projectDetails/SolutionResultSection';
import TechStack from '@/components/projectDetails/TechStack';

const WorkDetailPage = () => {
    return (
        <>
            <ProjectOverview />
            <div className='pt-48'>
                <CaseStudySections />
            </div>
            <SolutionResultSection />
            <TechStack />
        </>
    );
}

export default WorkDetailPage;
