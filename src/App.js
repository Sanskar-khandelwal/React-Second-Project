import logo from './logo.svg';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import './App.css';

import Image1 from '../src/images/Photo_grid.png'


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
  return (
    <div className = "container">
            <Card 
            img = {Image1}
            rating = "6.0"
            reviewCount = "(6)"
            country = "USA"
            title = "Life Lessons with Katie Zaferes"
            price = "136"
            />
    </div>
  )
}

export default App;
