import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="products" element={<ProductList />}>
        <Route path=":category" element={<ProductList />} />
      </Route>
      <Route path="product/:productId" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
