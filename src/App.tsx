import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <main>
        <Hero />

        <About />
        <Skills />

        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
