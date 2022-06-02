import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CreateCompany from "./pages/CreateCompany";
import CompanyView from "./pages/CompanyView";
import CompanyAdmin from "./pages/CompanyAdmin";
import Companies from "./pages/Companies";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/" exact />
            <Route element={<Login />} path="/login" exact />
            <Route element={<Home />} path="/home" exact />
            <Route element={<Admin />} path="/admin" exact />
            <Route element={<CreateCompany />} path="/admin/company/create" exact />
            <Route element={<CompanyView />} path="/company/:id/:companyName" exact />
            <Route element={<CompanyAdmin />} path="/admin/company/:id/:companyName" exact />
            <Route element={<Companies />} path="/admin/companies" exact />
            <Route element={<NotFound />} path="*" />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
