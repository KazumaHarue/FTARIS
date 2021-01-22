import React from 'react';
import Header from "./Header";
import StartBattle from "./StartBattle.jsx";
import Catch from "./Catch";
import BeatCheck from "./BeatCheck";
import About from "./About";
import BattlePage from './BattlePage';
import MatchingPage from './MatchingPage';
import Peer from 'skyway-js';

let peer;            // new Peerを格納する変数
let localStream;     // 自分のカメラ映像(相手に送信される)
let opponentStream;  // 相手のカメラ映像
let mediaConnection; // 相手のID、映像などの情報

class TopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Component: null,      // 表示するコンポーネント,デフォルト(null)でTopPage
      myPeerId: null,       // 自分のPeerID
      opponentPeerId: null, // 相手のPeerID
      getMedia: null,       // 映像取得の可否(Boolean型)
      peerOpen: false       // peerが作成されているか(Boolean型)
    };
  }

  /* 対戦相手を探すページ */
  MatchingPage = () => {
    return (
      <MatchingPage isSucceeded={this.state.getMedia} clickSelectHome={() => this.selectHome()} />
    );
  }

  /* 実際にバトルするページ */
  BattlePage = () => {
    return (
      <BattlePage myStream={localStream} opponentStream={opponentStream} mediaConnection={mediaConnection} />
    )
  };

  /* バトルを始めるボタン */
  selectBattle = (props) => {
    // カメラ映像取得
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setTimeout(() => {
          this.setState({ Component: this.MatchingPage, getMedia: true });
          // 着信時に相手にカメラ映像を返せるように、グローバル変数に保存しておく
          localStream = stream;
          // 作成された瞬間のPeerに発信すると、稀に映像が取得できないので2秒待つ
          peer = new Peer({
            key: 'd29a08de-439a-4ea9-8549-21de16a6982b',
            debug: 3
          });
          this.setState({ peerOpen: true });
          peer.on('open', () => {
            this.setState({ myPeerId: peer.id });
            console.log(`私のpeerIDは ${this.state.myPeerId} です。`);
            // 全ての接続中peerIDを取得(skywayのrestAPI)
            peer.listAllPeers((peers) => {
              console.log(peers);
              // 偶数番目のユーザーが奇数番目のユーザーに発信する処理
              if (peers.length % 2 === 0) { // 偶数番目のユーザー
                this.setState({ opponentPeerId: peers[peers.length - 2] }); // 自分のひとつ前に作成されたPeerID
                console.log(`対戦相手のpeerIDは ${this.state.opponentPeerId} です。`);
                // mediaConnectionEvents関数でdisconnect()が発火しない事があるため、発信した一定秒後にdisconnectする
                // 基本的にmediaConnectionEvents関数内でdisconnectされるが、失敗したときの保険として追記
                async function disconnectServer(wait) {
                  try {
                    await new Promise((resolve, reject) => {
                      setTimeout(resolve, wait);
                    });
                    peer.disconnect();
                    console.log("disconnect発火(setEventListener外)");
                  } catch (err) {
                    console.error(err);
                  }
                }
                disconnectServer(1500);
                // 発信処理
                mediaConnection = peer.call(this.state.opponentPeerId, localStream);
                setEventListener(mediaConnection);
                this.setState({ Component: this.BattlePage });
              } else { // 奇数番目のユーザー
                console.log(`誰かが ${this.state.myPeerId} にかけるのを待っています。`);
                //着信処理
                peer.on('call', media => {
                  mediaConnection = media;
                  media.answer(localStream);
                  setEventListener(media);
                  this.setState({ Component: this.BattlePage });
                  console.log(`対戦相手のpeerIDは ${media.remoteId} です。`);
                });
              }
            });
          });
          // マッチング後のイベント発火時の処理をまとめた関数
          const setEventListener = media => {
            console.log("setEventListener発火");
            media.on('stream', stream => {
              opponentStream = stream;
              // 対戦相手以外とマッチングしないように、シグナリングサーバとの接続を切断する
              // マッチング直後に切断すると情報の通信が完了しないため余裕を持たせる
              async function disconnectServer(wait) {
                try {
                  await new Promise((resolve, reject) => {
                    setTimeout(resolve, wait);
                  });
                  peer.disconnect();
                  console.log("disconnect発火(setEventListener内)");
                } catch (err) {
                  console.error(err);
                }
              }
              disconnectServer(900);
            });
            media.on("close", () => {
              alert("相手との接続が切断されました。");
              this.selectHome();
            });
          }
        }, 2000);
      }).catch(error => {
        this.setState({ Component: this.MatchingPage, getMedia: false });
        // 失敗時にはエラーログを出力
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
      });
  }

  /* ホームへ戻る関数 */
  selectHome = () => {
    if (this.state.getMedia === true) {
      // シグナリングサーバとの接続を切断する
      peer.destroy();
    }
    setTimeout(() => {  // 連打防止
      this.setState({ Component: null });
    }, 2000);
  }

  /* デフォルトで表示する画面 */
  render() {
    // const { Component } = this.state; 分割代入
    const Component = this.state.Component;
    if (Component) return <Component />;
    return (
      <div>
        <Header />
        <Catch />
        <StartBattle selectBattle={() => this.selectBattle()} />
        <BeatCheck />
        <About />
      </div>
    )
  }
}

export default TopPage;

// TODO:disconnectの秒数変更