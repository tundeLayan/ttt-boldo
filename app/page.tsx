import {
    About,
    Footer,
    Navbar,
    OurNumbers,
    OurStory,
    OurTeam,
    OurValues,
    Template,
} from '@/components/partials';

export default function Home() {
    return (
        <main className="min-h-screen mx-auto">
            <Navbar />
            <About />
            <OurStory />
            <OurNumbers />
            <OurTeam />
            <OurValues />
            <Template />
            <Footer />
        </main>
    );
}
