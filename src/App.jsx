import React, {  useState } from 'react';
import { CartProvider } from './contexts';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import './App.css';


function App() {
  // const [cart, setCart] = useState([]);

  return (
    <CartProvider  >
      <div className="App">
        <div className="left-pannel">
          <LeftPanel />
        </div>
        <div className="right-panel">
          <RightPanel />
        </div>

      </div>
    </CartProvider>

  );
}

export default App;
