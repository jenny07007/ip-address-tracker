import Background from "./components/background";
import Dashboard from "./components/dashboard";
import { IpContextProvider } from "./contexts/IpContextProvider";
import "./styles/pages/_homepage.scss";

function App() {
  return (
    <div className="wrapper">
      <IpContextProvider>
        <Background />
        <Dashboard />
      </IpContextProvider>
    </div>
  );
}

export default App;
