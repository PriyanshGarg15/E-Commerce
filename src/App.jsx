import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Products from './Components/Admin/product'
import Dashboard from './Components/Admin/Dashboard';
import Settings from './Components/Admin/Settings';
import Payments from './Components/Admin/Payments';
import Customers from './Components/Admin/Customers';
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
            <Route path='dashboard'element={<Dashboard/>}/>
            <Route path='settings'element={<Settings/>}/>
            <Route path='payments'element={<Payments/>}/>
            <Route path='customers'element={<Customers/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;