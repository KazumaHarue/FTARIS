import React from 'react';
import '../styles/style.css';

const About = (props) => (
  <div className="about">
    <a href=" " data-toggle="modal" data-target="#aboutModal">FTARISとは？</a>
    <div className="modal fade" id="aboutModal" tabIndex="-1" role="dialog" aria-labelledby="aboutModalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="aboutModalTitle">FTARISの始め方</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h5>FTARISとは？</h5>
            <p>FTARISは、世界中のラッパーといつでもMCバトルができるサービスです。</p>
            {/* <h5>ビートを聴いてみよう</h5>
            <p><span>ビートを聴く</span>から選んだビートを聴くことができます。</p> */}
            <h5>バトルを始めよう</h5>
            <p><span>バトルを始める</span>で対戦相手を探します。</p>
            {/* <h5>ビートを選ぼう</h5>
            <p>ランダムで先攻と後攻が決まり、ビートチェックの後、先攻がビートと小節数を選びます。</p> */}
            <h5>バトル開始</h5>
            <p>カウントダウンの後、バトルがスタートします。</p>
            <h5>相手にお礼を言おう</h5>
            <p>バトル終了後30秒間は会話を楽しめます。</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;