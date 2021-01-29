import React, { useState } from 'react';
import '../styles/style.css';

// props.provider : 提供者名
// props.beat     : ビート名

const Beat = (props) => {
  let iconClass = "far fa-play-circle";
  const [display, btnClick] = useState(false);
  if (display === true) {
    iconClass = "far fa-stop-circle";
  } else {
    iconClass = "far fa-play-circle";
  }
  if (props.beat === undefined) {
    return (
      <div className="beat">
        <div className="provider"><p>{props.provider}</p></div>
      </div>
    )
  } else {
    return (
      <div className="beat">
        <div className="beat-name">
          <i className={iconClass} onClick={() => btnClick(!display)}></i>
          <p className="name">{props.beat}</p>
        </div>
      </div>
    )
  }
};

export default Beat;