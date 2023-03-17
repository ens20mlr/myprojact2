import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <img src={require('../files/toplogo.png')} width="200px" height="50px" />
            <p>Användarvillkor           Integritetspolicy</p>
          </footer>
          
        )
    }
}
export default Footer;