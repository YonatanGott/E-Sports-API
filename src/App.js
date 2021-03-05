import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./components/Home";
import Teams from "./components/Teams";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const [gameType, setGameType] = useState('')
  const [team, setTeam] = useState(null)
  const [showModal, setShowModal] = useState(false);


  // Set style by game
  const handleGameType = (e) => {
    setGameType(e.target.value)
  }

  // Set team to show on Modal
  const handleTeamPage = (e) => {
    let teamObj = JSON.parse(e.target.value)
    setTeam(teamObj)
    setShowModal(true)
  }

  // Modal 
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <Modal showModal={showModal} team={team} handleCloseModal={handleCloseModal} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/teams">
            <Teams gameType={gameType} handleTeamPage={handleTeamPage} handleOpenModal={handleOpenModal} />
          </Route>
          <Route path="/">
            <Home handleGameType={handleGameType} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
