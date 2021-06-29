import React from "react";

const today=new Date();

function Footer(){
   return <footer>Copyright @ {today.getFullYear()}</footer>
}

export default Footer;