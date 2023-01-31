import NavBar from './NavBar';

function App() {
  const title = 'Hello'
  return (
    <div className="App">
      
      <p>
        <h1>Devyani's Portfolio</h1>
        <NavBar />
        <br/>
        <h3>{ title }</h3>
      </p>
    </div>
  );
}

export default App;
