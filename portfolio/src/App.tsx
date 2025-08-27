import MainContent from "./Components/MainContent/MainContent";
import NavPanel from "./Components/NavPanel/NavPanel";

function App() {
  return (
    <div className="App">
      <div className="header-outer">
            <div className="header-nav-panel">
                {/* Navigation panel content */}
                <NavPanel />
            </div>
            <div className="header-content-panel">
                {/* Main content */}
                <MainContent />
            </div>
        </div>
    </div>
  );
}

export default App;
