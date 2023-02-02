import Education from './Education';
import Experience from './Experience';
import NavBar from './NavBar';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Experience />
      <Education />
      <p className='foot'>Designed and Created by<br /> Devyani Barde</p>
    </div>
  );
}

export default App;
