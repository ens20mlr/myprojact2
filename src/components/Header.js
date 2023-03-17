import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header className="header">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="logo">
                  <a href="/"><img src={require('../files/toplogo.png')} width="200px" height="50px" style={{padding: '5%'}} /></a>
                </div>
                <input type="text" placeholder="Sök film, aktör eller skådespelare..." onfocus="search(this)" />
                <input type="checkbox" id="nav-check" />
                <label htmlFor="nav-check" className="nav-toggler">
                  <span />
                </label>
                <nav className="nav">
                  <ul>
                    <li><a href="/Meny" className="active">Meny</a></li>
                    <li><a href="/Login" className="active">Logga in/ Skapa användare</a></li>
                    <li><a href="/Personal" className="active">Min sida</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        )
    }

}
export default Header;