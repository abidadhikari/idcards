import React from "react"
import  ReactDOM  from "react-dom"
import App from "./components/App"
window.addEventListener("load",()=>{
    document.body.style.overflowY="scroll";
    document.getElementById("preloader").style.display="none";
})
ReactDOM.render(<App />, document.getElementById("root"))