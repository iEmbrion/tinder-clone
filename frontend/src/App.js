import './App.css';
import Header from './component/header/Header';
import SwipeButtons from './component/swipe-buttons/SwipeButtons';
import TinderCards from './component/tinder-card/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
