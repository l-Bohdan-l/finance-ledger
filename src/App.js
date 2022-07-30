import './App.css';
import { Header } from './components/Header/Header';
// import {Container} from './components/Container/Container';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Cases } from './components/Cases/Cases';
import {Blog} from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Hero />
        <About />
        <Cases />
        <Blog />
     
    </div>
  );
}

export default App;
