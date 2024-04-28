

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Footer from './Pages/Footer';
import Signup from './Pages/Signup';
import Settings from './Pages/Settings';

import Product from './Pages/Product';
import Search from './Pages/Search';
import User from './Pages/User';
import UserList from './Pages/UserList';
import Order from './Pages/Order';
import OrderList from './Pages/OrderList';
import Admin from './Pages/Admin';
import Offer from './Pages/Offer';
import OfferList from './Pages/OfferList';
import Payment from './Pages/Payment';
import PaymentList from './Pages/PaymentList';
import Signin from './Pages/Signin';
import About from './Pages/About';
import Fruits from './Pages/Friuts';
import Vegetables from './Pages/Vegetables';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/product" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/offerlist" element={<OfferList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentlist" element={<PaymentList />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
