import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import NavBar from './components/NavBar';
import Api from './Api';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Api />
      <Button variant="contained" color="primary">
      Hello World
    </Button>

    </div>
  );
}

export default App;
