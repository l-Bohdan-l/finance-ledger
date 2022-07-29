import './App.css';
import { Header } from './components/Header/Header';
// import {Container} from './components/Container/Container';
import { Hero } from './components/Hero/Hero';


function App() {
  return (
    <div className="App">
      {/* <Container> */}
        <Header />
        <Hero/>
      {/* </Container> */}
    </div>
  );
}

export default App;
