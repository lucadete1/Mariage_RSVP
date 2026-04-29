import useScrollReveal from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Programme from './components/Programme';
import Couleurs from './components/Couleurs';
import Cadeaux from './components/Cadeaux';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Gallery />
      <Programme />
      <Couleurs />
      <Cadeaux />
      <Rsvp />
      <Footer />
    </>
  );
}
