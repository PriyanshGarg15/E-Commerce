import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Admin from './Components/Admin'



const App = () =>
{
  return (
    <div>
      <Router>
        <Routes>
          <Route  path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;