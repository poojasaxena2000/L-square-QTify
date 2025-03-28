import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Cardlist from './components/Card/Cardlist.jsx';
import Faqs from './components/FAQs/Faqs.jsx';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Cardlist />
    <Faqs />
    </div>
  );
}

export default App;
