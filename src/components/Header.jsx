import React, { useState } from 'react';
import '../styles/style.css';

const Header = (props) => {
  // お知らせの表示/非表示
  let textClass = "info-text";
  const [display, btnClick] = useState(false);
  if (display === true) {
    textClass = "info-text open";
  } else {
    textClass = "info-text";
  }
  // ヘッダーのテキストの切り替え
  const headerText = {
    null: "プレイ",
    RhymePage: "韻踏み",
    ProfilePage: "ホーム",
    EventPage: "ニュース",
    SettingPage: "設定"
  };
  if (props.prevtext === "hide") {
    if (props.footer === null) {
      return (
        <header className="header row">
          <div className="point">
            <div className="logo">P</div>
            <p>0</p>
          </div>
          <p className="title">{headerText[props.footer]}</p>
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
    } else if (props.footer === "RhymePage" || "ProfilePage" || "EventPage" || "SettingPage") {
      return (
        <header className="header row">
          <p className="title mx-auto">{headerText[props.footer]}</p>
        </header>
      );
    }
  } else if (props.prevtext === "show") {
    return (
      <header className="header row">
        <div className="header-prev">
          <i className="fas fa-chevron-left"></i>
          <p>{headerText[props.footer]}</p>
        </div>
      </header>
    );
  }
};

export default Header;