/* eslint-disable jsx-a11y/anchor-is-valid */
import logoImg from '../img/logo.svg';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>On a Mission to Preserve the Power of Childhood</h1>
          <p>Your support makes this possible.</p>
        </main>
        <div className="location">
          <strong>Boston</strong>
          <span>Massachusetts</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
