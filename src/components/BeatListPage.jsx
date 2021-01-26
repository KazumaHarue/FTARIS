import React, { useState } from 'react';
import '../styles/style.css';
import Header from './Header.jsx';

const BeatListPage = (props) => {
  let iconClass = "far fa-play-circle";
  const [display, btnClick] = useState(false);
  if (display === true) {
    iconClass = "far fa-stop-circle";
  } else {
    iconClass = "far fa-play-circle";
  }
  return (
    <div className="beatlist">
      {/* TODO: 別コンポーネントに切り分ける */}
      <Header footer="null" prevtext="show" />
      <div className="provider"><p>ゆの(NA3TY)</p></div>
      <div className="beat">
        <i className={iconClass} onClick={() => btnClick(!display)}></i>
        <p className="name">BPM94(戦国MCBATTLE提供)</p>
      </div>
    </div>
  )
};

export default BeatListPage;