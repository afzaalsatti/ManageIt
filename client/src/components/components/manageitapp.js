import React from 'react'
import ParticlesContainer from "../components/ParticlesContainer";
import SignUp from '../../components/AuthComponents/SignUp';
import '../../components/components/m.css'
const styles = {
    root: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100%",
      background: "#222",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
  
class ManageitApp extends React.Component{
   
    
    render()
    {
        return(
           
            <div id="particles-js">
            <ParticlesContainer></ParticlesContainer>
        </div>




        );
    }
}
export default ManageitApp;