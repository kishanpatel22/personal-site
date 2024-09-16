import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { AnimatedBackground } from 'animated-backgrounds';
import CustomNavbar from './components/Navbar.js';
import Name from './components/Name.js'
import { TerminalContextProvider } from "react-terminal";
import Terminal from './components/Terminal.js'

function App() {
  return (
    <div>
      <CustomNavbar />
      <AnimatedBackground animationName="starryNight" style={{ opacity: 0.99 }} />

      <div className="Name">
         <Name />
      </div>
      <div className="Terminal">
        <TerminalContextProvider>
          <Terminal />
        </TerminalContextProvider>
      </div>
      {/* Your app content */}
    </div>
  );
}
export default App;

