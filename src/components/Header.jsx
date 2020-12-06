import React from 'react';
import Logo from '../images/logo.png';
import TwitterLogo from '../images/twitter-brands.svg';
import InstagramLogo from '../images/instagram-brands.svg';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Header = (props) => (
  <header className="header row">
    <div className="header-left col-7 col-md-9 col-lg-10 d-flex align-items-center">
      <Link to="/" className="">
        <img src={Logo} alt="ロゴ" />
      </Link>
      <h1 className="header-ttl">FTARIS</h1>
    </div>
    <div className="header-right col-5 col-md-3 col-lg-2">
      <a href="https://twitter.com/FTARIS_com">
        <button type="button" className="btn btn-primary w-50">
          <img src={TwitterLogo} alt="Twitter" />
        </button>
      </a>
      <a href="https://Instagram.com/FTARIS_com">
        <button type="button" className="btn btn-primary w-50">
          <img src={InstagramLogo} alt="Instagram" />
        </button>
      </a>
    </div>
  </header>
);

export default Header;