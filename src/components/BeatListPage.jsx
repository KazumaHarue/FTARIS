import React from 'react';
import '../styles/style.css';
import Header from './Header.jsx';
import Beat from './Beat.jsx';

// props.selectPrev : トップに戻る処理

const BeatListPage = (props) => {
  return (
    <div className="beatlist">
      <Header selectPrev={() => props.selectPrev} footer="null" prevtext="show" />
      <Beat provider="ゆの(NA3TY)" />
      <Beat beat="BPM94(戦国MCBATTLE提供)" />
      <Beat beat="じょう2号(戦国MCBATTLE提供)" />
      <Beat beat="じょう3号(戦国MCBATTLE提供)" />
      <Beat beat="すばやいビート(戦国MCBATTLE提供)" />
      <Beat beat="Bounce＄(戦国MCBATTLE提供)" />
      <Beat beat="シャチトラップ(戦国MCBATTLE提供)" />
      <Beat provider="LUKA THE KISARAGI" />
      <Beat beat="Beat10" />
      <Beat beat="Beat17" />
      <Beat beat="Beat20" />
      <Beat beat="Beat27" />
      <Beat beat="Beat37" />
      <Beat beat="Beat38" />
      <Beat beat="Beat49" />
      <Beat provider="華偶" />
      <Beat beat="操ル人形" />
      <Beat beat="決戦" />
      <Beat beat="仔羊" />
      <Beat beat="獅子" />
      <Beat beat="富嶽" />
    </div>
  )
};

export default BeatListPage;