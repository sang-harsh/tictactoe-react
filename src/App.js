import './App.css';
import BaseContainer from './Components/BaseContainer';
import BoardContainer from './Components/BoardContainer';
import Header from './Components/Header';
import PlayerContainer from './Components/PlayerContainer';

function App() {
  return (
    <div className="App">
        <Header></Header>
      <div className="main">
        <PlayerContainer playerNo="1"/>
        <BoardContainer/>
        <PlayerContainer playerNo="2"/>
      </div>
      <BaseContainer/>
    </div>
  );
}

export default App;
