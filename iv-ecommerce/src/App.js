import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button variant="contained" color="primary">
      Hello World
    </Button>

    </div>
  );
}

export default App;
