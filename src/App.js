import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Header from './Header';
import Main from './Main';
import MarqueeSection from './MarqueeSection';
import BuildingForSection from './BuildingForSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MarqueeSection />
      <BuildingForSection />
    </div>
  );
}

export default App;
