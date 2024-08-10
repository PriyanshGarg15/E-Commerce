import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Products from './Components/Admin/product'
import Orders from './Components/Admin/order'

const App = () =>
{
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/admin'>
            <Route path='products'element={<Products/>}/>
            <Route path='orders'element={<Orders/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;