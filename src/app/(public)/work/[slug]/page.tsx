import ProjectOverview from '@/components/projectDetails/ProjectOverview';
import CaseStudySections from '@/components/projectDetails/CaseStudySections';
import SolutionResultSection from '@/components/projectDetails/SolutionResultSection';

const WorkDetailPage = () => {
    return (
        <>
            <ProjectOverview />
            <div className='pt-48'>
                <CaseStudySections />
            </div>
            <SolutionResultSection />
        </>
    );
}

export default WorkDetailPage;
