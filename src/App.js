import "./App.css";
import ProfilePhoto from "./components/ProfilePhoto";
import Address from "./components/Adress";
import FullName from "./components/FullName";

function App() {
  return (
    <div className="App">
      <div className = 'profil'>
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
