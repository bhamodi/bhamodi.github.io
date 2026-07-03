import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {ColorModeProvider} from './theme/ColorModeProvider';
import {About} from './sections/About';
import {Contact} from './sections/Contact';
import {Focus} from './sections/Focus';
import {Hero} from './sections/Hero';

export function App() {
  return (
    <ColorModeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </ColorModeProvider>
  );
}
