import './App.css';
import AverageRating from './components/Avarage-Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Sidebar from './components/Sidebar';
import Visitors from './components/Visitors';

function App() {
  return (
    <div>
    <div className="App">
      <div className="avg">
     <AverageRating />
     </div>
    <div className="rev">
     <Reviews />
     </div>
    <div className='sent'>
     <Sentiment />
     </div>
     <div></div>
     <Sidebar />
     

    <div></div>
    <div className='vs'>
     <Visitors />
     </div>
     
     
     
    </div>
    </div>
  );
}

export default App;
