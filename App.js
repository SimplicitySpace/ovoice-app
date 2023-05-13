import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Voicechat from './Components/Voicechat/Voicechat';
import Translate from './Components/Translate/Translate';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navigation />
              <Hero />
            </>
          } />
          <Route path='/voicechat' element={
            <>
              <Navigation />
              <Voicechat />
            </>
          } />
          <Route path='/translate' element={
            <>
              <Navigation />
              <Translate />
            </>
          } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
