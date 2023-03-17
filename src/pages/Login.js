import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

class Login extends React.Component{
    
    render(){
        const onChange = () => {};
        return(
       
            <body>
                <div className="Wrapper">
    
    
                    <section className="menyer">
            
                        <div className="meny-gridconatiner">
                            <div className="grid-item1">
                                <h1>Logga in med:</h1>
                                <form method="post">
                                <div className="textfield">
                                    <input type="text" required/>
                                <span></span>
                                    <label>Användarnamn</label>
                                </div>
            
                                <div className="textfield">
                                    <input type="text" required/>
                                    <span></span>
                                    <label>Lösenord</label>
                                </div>
            
                                <div className="forgotpass">Glömt lösenord?</div>
                                <input type="submit" value="logga in"/>
                                </form>
            
                            </div>
            
            
            
            
                            <div className="grid-item2" >
                            <h1>Skapa konto:</h1>
                            <form method="post">
                                <div className="textfield">
                                    <input type="text" required/>
                                <span></span>
                                    <label>Mail</label>
                                </div>
                    
                                <div className="textfield">
                                    <input type="text" required/>
                                    <span></span>
                                    <label>Lösenord</label>
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LeHOeIkAAAAAAcTOc_rWPlf9JhZAJqdiqkNV8Vf"
                                    onChange={onChange}/>
                    
                            
                                <input type="submit" value="Skapa konto"/>
                                </form>
            
                    
                        </div>
                    </div>
 
              
                     </section>  
            
                      
                </div>
            </body>
        
            
        )
    }

}
export default Login;