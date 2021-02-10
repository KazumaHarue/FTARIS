import React from 'react';
import '../styles/style.css';

// props.selectBattle : BattlePageに遷移し、マッチングの処理を行う

const ButtonGroup = (props) => (
  <div className="buttongroup row">
    {/* <button type="button" className="btn btn-primary">
      ○
      </button>
    <button type="button" className="btn btn-primary">
      ○
      </button>
    <button type="button" className="btn btn-primary">
      ○
      </button> */}
    <button type="button" className="startbutton btn btn-primary btn-lg w-100" onClick={() => props.selectBattle()}>
      フリーバトル
      </button>
    <button type="button" className="startbutton btn btn-primary btn-lg w-100">
      フレンドマッチ
      </button>
  </div>
);


export default ButtonGroup;