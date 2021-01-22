import React, { useState } from 'react';
import '../styles/style.css';

const Header = () => {
  let textClass = "info-text";
  const [display, btnClick] = useState(false);
  if (display === true) {
    textClass = "info-text open";
  } else {
    textClass = "info-text";
  }
  return (
    <header className="header row">
      <div className="point">
        <div className="logo">P</div>
        <p>0</p>
      </div>
      <p className="title">プレイ</p>
      <div className="infomation">
        <button onClick={() => btnClick(!display)} type="button" className="info-btn">
          !
        </button>
        <div onClick={() => btnClick(!display)} className={textClass}>
          <p className="ttl">お知らせ</p>
          <p className="txt">新バージョン2.0.1リリース。韻ふみの過去のランキングが見えるようになりました。</p>
        </div>
      </div>
    </header>
  );
};

export default Header;