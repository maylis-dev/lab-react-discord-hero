import discordlogowhite from "../assets/discord-logo-white.png";
import menuicon from "../assets/menu-icon.png";

function Header() {
  const styleheader = {
   
    with: 200,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    display: "flex",
  };

  const styleLogo = {
    width: "150px", 
    height: "auto", 
  };

  const styleMenu = {
    width: "40px",
    height: "40px",
  };

  return (
    <header style={styleheader} id="main-header">
      <img  style={styleLogo} src={discordlogowhite} alt="Discord logo white" />
      <img src={menuicon} alt="menu-icon"style={styleMenu} />
    </header>
  );
}

export default Header;
