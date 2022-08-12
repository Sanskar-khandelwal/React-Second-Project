import logo from './logo.svg';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import './App.css';
import data from './data'
console.log(data)




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// let img = require('../src/images/Photo_grid.png');
function App (){
  // <Navbar/>
  // <Hero/>
const hello = data.map(card => {
  return <Card 
  img = {card.coverImg} 
  rating = {card.stats.rating} 
  reviewCount = {card.stats.reviewCount}
  location = {card.location}
  price = {card.price}
  title = {card.title}
  description = {card.description}

  
  />
} )
console.log(hello)
console.log(hello.stats)
 
return (
    <div className = "container">
    
           {hello}
    </div>
  )
}

export default App;
