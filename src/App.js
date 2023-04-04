import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar />
        <MainDash />
        <div>3</div>
      </div>
    </div>
  );
}

export default App;
