import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="product" element={<ProductList />} />
      <Route path="product/:productId" element={<Product />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
