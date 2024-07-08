import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShotgunBoard from './components/boards/ShotgunBoard';
import Square25Board from './components/boards/Square25Board';
import Square100Board from './components/boards/Square100Board';
import MarchMadnessBrackets from './components/boards/MarchMadnessBrackets';
import PropBetBoard from './components/boards/PropBetBoard';
import ParlayCards from './components/boards/ParlayCards';
import SurvivorPools from './components/boards/SurvivorPools';
import PickEmPools from './components/boards/PickEmPools';
import ScorePredictionPools from './components/boards/ScorePredictionPools';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shotgun" element={<ShotgunBoard />} />
        <Route path="/square25" element={<Square25Board />} />
        <Route path="/square100" element={<Square100Board />} />
        <Route path="/march-madness" element={<MarchMadnessBrackets />} />
        <Route path="/prop-bet" element={<PropBetBoard />} />
        <Route path="/parlay-cards" element={<ParlayCards />} />
        <Route path="/survivor-pools" element={<SurvivorPools />} />
        <Route path="/pick-em-pools" element={<PickEmPools />} />
        <Route path="/score-prediction" element={<ScorePredictionPools />} />
      </Routes>
    </Router>
  );
}

export default App;
