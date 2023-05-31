import React from "react";
import "./App.css";
import Shop from "./pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Cart from "./components/cart/Cart";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route  path="/" Component={Home} /> */}
            <Route path="/products" Component={Shop} />
            <Route path="/cart" Component={Cart} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
