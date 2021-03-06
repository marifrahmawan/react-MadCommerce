import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { fetchCartData } from "./store/cart-actions";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(fetchCartData(user?._id, user?.accessToken));
  }, [dispatch, user]);

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
