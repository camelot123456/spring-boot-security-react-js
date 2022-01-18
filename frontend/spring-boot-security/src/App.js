import { Routes, Route , Link } from 'react-router-dom'
import HomePage from './templates/home/bodys/Home.js';
import NewsPage from './templates/home/bodys/News.js';
import ContactPage from './templates/home/bodys/Contact.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/news">
                News
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/news" element={<NewsPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
