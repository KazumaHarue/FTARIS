import React from 'react';
import '../styles/style.css';

// props.selectBattle : BattlePageに遷移し、マッチングの処理を行う

const ButtonGroup = (props) => (
  <div className="buttongroup row justify-content-center">
    <button type="button" className="startbutton btn btn-primary btn-lg w-25" onClick={() => props.selectBattle()}>
      バトルを始める
      </button>
    <button type="button" className="startbutton btn btn-primary btn-lg w-100" onClick={() => props.selectBattle()}>
      バトルを始める
      </button>
  </div>
);


export default ButtonGroup;