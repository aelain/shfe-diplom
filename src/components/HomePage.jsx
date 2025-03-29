import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import DaysMenu from './DaysMenu.jsx';
import MoviesSection from './MoviesSection.jsx';

const HomePage = () => {
  const root = document.querySelector(':root');
  if (root) {
    root.classList.remove('root__admin');
  }

  return (
    <div className="page">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="home" />
        </Link>
        <Link to="/login">
          <button className="btn_ok btn_login" type="button">Войти</button>
        </Link>
      </header>

      <main className="client__main">
        <DaysMenu />
        <MoviesSection />
      </main>
    </div>
  );
};

export default HomePage;