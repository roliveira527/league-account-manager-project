import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-page">
        <div className='card-wrapper'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
