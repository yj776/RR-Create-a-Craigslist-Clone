// Import data
import Searchbar from './component/Searchbar'
import Directory from './component/Directory'
import Gallery from './component/Gallery'
import Sidebar from './component/Sidebar'


// Import components
import './App.css';

function App(){
  return(
        <div>
          <h1>craigslist</h1>
          <div className="App">
               {/* Your content will go here! */}
              <Searchbar/>
              <Directory/>
              <Gallery/>
              <Sidebar/>
          </div>
        </div>
  )
  // return (
  //   <div>
  //     <h1>craigslist</h1>
  //     <div className="App">
  //       {/* Your content will go here! */}
  //     </div>
  //   </div>
  // );
}

export default App;
