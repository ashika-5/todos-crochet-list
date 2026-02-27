import React from 'react'
import './Footer.css' 

export default function () {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      
      <p className="text-center">
      Copyright &copy; MyTodosList.com

      </p>
    </footer>
  );
}
