import React from 'react';
import '../styles/style.css';

const StartBattle = (props) => (
  <div className="startbattle row justify-content-center">
    <button type="button" className="startbutton btn btn-primary btn-lg w-100" onClick={() => props.selectBattle()}>
      バトルを始める
      </button>
  </div>
);


export default StartBattle;