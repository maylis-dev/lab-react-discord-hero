function Text() {
  const textstyle = {
    width: "400px", // width
    height: "auto",

    fontFamily: "'Poppins', sans-serif",
    marginTop: "0.5rem",

    display: "flex",
    flexDirection: "column", // organise les enfants en colonne
    justifyContent: "flex-start", // commence en haut
    alignItems: "flex-start", // aligne à gauche
    padding: "1rem 2rem",
    color: "white",
  };

  const h1style = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 900,
    margin: 0,
    textAlign: "left",
  };
  const pstyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    fontSize: "16px",

    textAlign: "justify",
  };

  const buttonstyle = {
    width: "250px", // width
    height: "150px",
  
    

    fontFamily: "'Roboto', sans-serif",
    marginTop: "0.5rem",
    color: "black",
    gap: "10px",
    border: "none",
    borderRadius: "30px",

    display: "flex",
    flexDirection: "column", // organise les enfants en colonne
    justifyContent: "center", // commence en haut
    
  };

  return (
    <div className="textmain" style={textstyle}>
      <h1 style={h1style}>IMAGINE A PLACE...</h1>
      <p style={pstyle}>
        where you can belong to a school club , a gaming group , or a worldwide
        art community.Where you and handful of friends can spend time together.A
        place that makes it easy to tlk every day and hang out more often{" "}
      </p>

      <div className="button" style={buttonstyle}>
        <button style={buttonstyle}>Downloand for Mac</button>
        <button style={buttonstyle}>Open Discord in your browser </button>
      </div>
    </div>
  );
}

export default Text;
