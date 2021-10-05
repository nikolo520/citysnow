
import './App.css';
import Menu from './components/Menu';
import Board from './components/Board';

function App() {
  return (
    <div className='App'>
      <Menu nameapp="Citysnow" logoapp='https://image.flaticon.com/icons/png/512/1113/1113775.png'/>
      <Board />
    </div>
  );
}

export default App;
