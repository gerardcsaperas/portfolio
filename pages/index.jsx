import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Gerard Castrelo Saperas | Developer</title>
                <meta name="description" content="Gerard's web portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Hero />
                <AboutMe />
                <Resume />
                <Projects />
                <Quote />
            </main>
            <Footer />
        </div>
    );
}
