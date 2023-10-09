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

function App() {
     return (
          <div className="App">
               <Provider store={store}>
                    <BrowserRouter>
                         <Header />
                         <Sidebar />

                         <Routes>
                              <Route path="/" element={<Home />} />
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
                         </Routes>

                         <Footer />
                    </BrowserRouter>
               </Provider>
          </div>
     );
}

export default App;
