import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'animate.css';
import NotFound from './Components/NotFound';
import Products from './Components/Admin/product'
import Product from './Components/product'
import Dashboard from './Components/Admin/Dashboard';
import Settings from './Components/Admin/Settings';
import Payments from './Components/Admin/Payments';
import Customers from './Components/Admin/Customers';
import Orders from './Components/Admin/order'
import Home from './Components/Home';
import Category from './Components/Category';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/contact';

const App = () =>
{
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
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