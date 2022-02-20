
import './App.css';
import Home from './Home/Home'
import Effect from './Effect/Effect';
import State from './State/State';
import Context from './Context/Context'
import Reducer from './Reducer/Reducer';
import {Routes,Route, Link ,} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
function App() {
  return (
    <div className='App container'>    
      <Navbar />
      <div className='contain'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='state' element={<State />} />
                <Route exact path='reducer' element={<Reducer />} />
                <Route exact path='effect' element={<Effect />} />
                <Route exact path='context' element={<Context />} />
              </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
