//import {Header, Hero, Projects, Technologies, Timeline, Acomplishments, Footer} from '../components'
import BgAnimation from '../components/BackgrooundAnimation/BackgrooundAnimation'
import Hero from '../components/Hero/Hero'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/Timeline/Timeline'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Projects from '../components/Projects/Projects'
import {Layout} from '../layout/Layout'
import {Section } from '../styles/GlobalComponents'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
