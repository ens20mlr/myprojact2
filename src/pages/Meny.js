import React from "react";

class meny extends React.Component{
    render(){
        return(
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Filmtipset</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
 
  
  {/* Meny */}
  <section className="meny">
    <div className="button">
      <button
        style={{
          fontSize: 30,
          border: "none",
          outline: "none",
          color: "tomato",
          backgroundColor: "transparent"
        }}
        onclick="history.back()"
      >
        <i className="fa-regular fa-circle-xmark" />
      </button>
    </div>
    <div className="parent">
      <div className="div1" style={{ backgroundColor: "#A03131" }}>
        <h1>Din sida</h1>
        <p1>
          <a href="personal.html">Sparade filmer</a>
        </p1>
        <br />
        <p1>
          <a href="personal.html">Dina inlägg</a>
        </p1>
        <br />
        <p1>
          <a href="personal.html">Senaste filmer</a>
        </p1>
        <br />
      </div>
      <div className="div2" style={{ backgroundColor: "#A03131" }}>
        <h1>Topplistor</h1>
        <p1> Sorterad på betyg</p1>
        <br />
        <p1> Sorterad på antal visningar</p1>
        <br />
        <p1> Svenska filmer</p1>
        <br />
        <p1> Actionfilmer</p1>
        <br />
        <p1> Skärckfilmer</p1>
        <br />
      </div>
      <div className="div3" style={{ backgroundColor: "#A03131" }}>
        <h1>Forum</h1>
        <p1> Blandat</p1>
        <br />
        <p1> Filmsnack</p1>
        <br />
        <p1> Analys</p1>
        <br />
        <p1> Om sajten</p1>
        <br />
        <p1> Teknik</p1>
        <br />
      </div>
    </div>
  </section>

</>

        )
    }

}
export default meny;