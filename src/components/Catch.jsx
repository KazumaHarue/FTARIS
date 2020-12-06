import React from 'react';
import '../styles/style.css';
import Logo from '../images/logo.png';

const Catch = (props) => (
  <div className="catch row d-lg-flex flex-row-reverse">
    {/* imgに直接hight:autoを指定すると、safariで画像が縦に伸びる */}
    <div className="col-lg-5 top-img">
      <img src={Logo} alt="ロゴ" />
    </div>                    {/* spanで中途半端な改行を防止 */}
    <h2 className="col-lg-7"><span>オンライン</span><span>MCバトルなら</span><span>FTARIS</span></h2>
  </div>
);

export default Catch;