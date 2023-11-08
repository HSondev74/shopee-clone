import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
     Home,
     CategoryProduct,
     ProductSingle,
     Cart,
     Search,
} from "./pages/index";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
     return (
          <div className="App">
               <Provider store={store}>
                    <BrowserRouter>
                         <Header />
                         <Sidebar />

                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/login" element={<Login />} />
                              <Route
                                   path="/product/:id"
                                   element={<ProductSingle />}
                              />
                              <Route
                                   path="/category/:category"
                                   element={<CategoryProduct />}
                              />
                              <Route path="/cart" element={<Cart />} />
                              <Route
                                   path="/search/:searchTerm"
                                   element={<Search />}
                              />
                              <Route path="/checkout" element={<CheckOut />} />
                         </Routes>

                         <Footer />
                    </BrowserRouter>
               </Provider>
          </div>
     );
}

export default App;
