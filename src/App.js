import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import Recommendation from './components/recommendation/Recommendation';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='sidebar-and-body-container'>
        <SideBar />
        <Body />
        <Recommendation />
      </div>
      
    </div>
  );
}

export default App;
