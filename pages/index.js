import Head from 'next/head';
import Excess from '../components/excess';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Step from '../components/step';
import Testimoni from '../components/testimoni';


const Index = () => {
  return(
    <>
    <Head>
      <title>Architecture</title>
    </Head>

    <Hero />
    <Excess />
    <Step />
    <Projects />
    <Testimoni />
    <Footer />
    </>
  )
}

export default Index