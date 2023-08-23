import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import './styles/Utilities.css'

function App() {

  useEffect(() => {

    /**
     * Intersection Observer Setup
     */
    const cards = document.querySelectorAll(".tarjeta")
    const observerProducts = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tarjeta--show")
        }
      })
      console.log(entries)
    }, {
      threshold: .3
    })

    cards.forEach(card => {
      observerProducts.observe(card)
    })

  })

  return (
    <>
      <Nav />
      <Header />

      <div class="bg-transition"></div>
      <div class="bg-transition-2"></div>

      <MainContent />

      <div class="bg-transition-3"></div>
      <div class="bg-transition-4"></div>

      <Footer />
    </>
  );
}

export default App;
