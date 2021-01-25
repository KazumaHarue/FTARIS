import React from 'react';
import '../styles/style.css';
import Logo from '../images/logo.png';

const Catch = (props) => {
  return (
    <div className="catch row">
      {/* imgに直接hight:autoを指定すると、safariで画像が縦に伸びる */}
      <div className="online col-2">
        <p className="txt">オンライン</p>
        <p className="num">{}人</p>
      </div>
      <img src={Logo} alt="ロゴ" className="col-8" />
      <div className="beat-list col-2" onClick={() => props.selectBeatList()}>
        <div className="logo">
          <div className="circle"></div>
        </div>
        <p className="txt"><span>Beat</span><span>一覧</span></p>
      </div>
    </div>
  )
};

export default Catch;