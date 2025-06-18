import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Clients from "./Pages/Clients/Clients";
import Contacts from "./Pages/Contacts/Contacts";


function App() {
  return (
    <Router>
  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
