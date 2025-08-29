import MainContent from "./Components/MainContent/MainContent";
import { MainContentProps } from "./Types/ComponentProps";
import NavPanel from "./Components/NavPanel/NavPanel";
import { useState } from "react";
import { MY_NAV_ITEMS } from "./Constants/Common";

function App() {
  const [selectedNav, setSelectedNav] = useState<string>(MY_NAV_ITEMS[0].name);

  return (
    <div className="App">
      <div className="header-outer">
            <div className="header-nav-panel">
                {/* Navigation panel content */}
                <NavPanel selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
            </div>
            <div className="header-content-panel">
                {/* Main content */}
                <MainContent selectedNav={selectedNav} />
            </div>
        </div>
    </div>
  );
}

export default App;
