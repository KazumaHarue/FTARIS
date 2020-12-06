import React from 'react';
import TwitterLogo from '../images/twitter-brands.svg';
import FacebookLogo from '../images/facebook-f-brands.svg';
import LineLogo from '../images/line-brands.svg';

const MatchingPage = (props) => {
  if (props.isSucceeded) {
    /* 対戦相手を探すページ(カメラ取得成功) */
    return (
      <div className="battlepage container">
        <h2 className="battle-ttl">
          対戦相手を探しています…
        </h2>
        <div className="battle-text">
          <p>ごめんなさい！<br />FTARISはまだユーザーが少ないので、マッチングに時間がかかります…<br />下のボタンでシェアして、対戦相手を募集しよう！</p>
        </div>
        <div className="share-buttons d-flex justify-content-around">
          <a href="https://www.facebook.com/sharer/sharer.php?u=ftaris.com"><img src={FacebookLogo} alt="Twitter" /></a>
          <a href="https://twitter.com/intent/tweet?url=ftaris.com&text=オンラインMCバトルならFTARIS 世界中のラッパーとFTARISで繋がろう"><img src={TwitterLogo} alt="Twitter" /></a>
          <a href="http://line.me/R/msg/text/?オンラインMCバトルならFTARIS 世界中のラッパーとFTARISで繋がろうftaris.com"><img src={LineLogo} alt="Twitter" /></a>
        </div>
        <div className="row justify-content-center">
          <button className='btn btn-primary w-100' onClick={() => props.clickSelectHome()}>
            トップへ戻る
          </button>
        </div>
      </div>
    );
  } else {
    /* 対戦相手を探すページ(カメラ取得失敗) */
    return (
      <div className="battlepage container">
        <h2 className="battle-ttl">
          カメラとマイクの使用を許可してください。
        </h2>
        <div className="share-buttons d-flex justify-content-around">
          <a href="https://www.facebook.com/sharer/sharer.php?u=ftaris.com"><img src={FacebookLogo} alt="Twitter" /></a>
          <a href="https://twitter.com/intent/tweet?url=ftaris.com&text=オンラインMCバトルならFTARIS 世界中のラッパーとFTARISで繋がろう"><img src={TwitterLogo} alt="Twitter" /></a>
          <a href="http://line.me/R/msg/text/?オンラインMCバトルならFTARIS 世界中のラッパーとFTARISで繋がろうftaris.com"><img src={LineLogo} alt="Twitter" /></a>
        </div>
        <div className="row justify-content-center">
          <button className='btn btn-primary w-100' onClick={() => props.clickSelectHome()}>
            トップへ戻る
          </button>
        </div>
      </div>
    );
  }
}

export default MatchingPage;