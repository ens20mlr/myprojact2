import React from "react";

class Personal extends React.Component{
    render(){
        return(
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Filmtipset</title>
  <link rel="stylesheet" href="style.css" />
  <div className="Wrapper">
 
 
    <div className="parents">
      <div className="div1p" style={{ backgroundColor: "#252525" }}>
        <h1>Senast sedda filmer</h1>
        <div className="imgbackground"></div>
        <img
          src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
           src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
          src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
        src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
      </div>
      <div className="div2p" style={{ backgroundColor: "#252525" }}>
        <h1>Sparade filmer</h1>
        <img
           src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
           src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
           src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
        <img
           src={require('../files/shrekbild.jpg')}
          width="100rem"
          height="150rem"
          style={{ padding: "0 0 20px 50px" }}
        />
      </div>
      <div className="div3p" style={{ backgroundColor: "#252525" }}>
        <h1>Dina inlägg</h1>
        <p1> Shrek är världens bästa film</p1>
        <br />
        <p1> Shrek är najs</p1>
        <br />
        <p1> Shrek är min broder</p1>
        <br />
      </div>
    </div>
  </div>
</>
        )
    }
}

export default Personal;