import "./App.css";
import Header from "./components/header.jsx";
import Text from "./components/text.jsx";
import discordbackground from "./assets/discord-background.png";

function App() {
  const imageContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
   
    height: "200px",
    width: "100%",
    
  };

  const imageStyle = {
    width: "300px",
    height: "auto",
  };

  return (
    <div className="App">
      <Header />
      <Text />
      <div style={imageContainerStyle}>
        <img
          src={discordbackground}
          alt="Discord background"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

export default App;
