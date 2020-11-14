import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import CompanyLike from './components/CompanyLike';
import Features from './components/Features';
import Jackpots from './components/Jackpots';
import Design from './components/Design';
import Choose from './components/Choose';
import Ultimate from './components/Ultimate';
import Extra from './components/Extra';
import Meet from './components/Meet';
import Asked from './components/Asked';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    
    <Header/>
    
    <Wrapper />
    <CompanyLike />
    <Features />
    <Jackpots />
    <Design />
    <Choose />
    <Ultimate />
    <Extra />
    <Meet />
    <Asked />
    <Download />
    <Footer />
   
    </div>
  );
}

export default App;
