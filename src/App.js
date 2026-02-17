import logo from './logo.svg';
import './App.css';
import header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import TodoItems from './MyComponents/TodoItems';
import Todos from './MyComponents/Todos';
import Header from './MyComponents/Header';



function App() {
  let todos = [
    {
      sno: 1,
      title: "one single rose,tulip, and sunflower",
      desc: "I have to learn the pattern to get this rose done"
    },

    {
      sno: 2,
      title: "animal stuffed keychain",
      desc: "I have to collect all the color of thread to complete it."
    },


    {
      sno: 3,
      title: "Mini bag",
      desc: "I have to learn the pattern to get this bad done"
    }

  ]
  
  return (
    
    
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos/>
      <Footer/>
   
    </>
    
  );
}

export default App;
