import React, { useRef, useEffect } from 'react';
import '../styles/style.css';


// mediaConnection : 相手のID、映像などの情報
// on('stream'...  : 相手の映像が送られてきた時のイベント
// props.myStream  : TopPage内のnavigator.mediaDevices.getUserMedia()で取得した自分の映像


const BattlePage = (props) => {
  const myVideo = useRef(null);
  const opponentVideo = useRef(null);
  props.mediaConnection.on('stream', async stream => {
    opponentVideo.current.srcObject = stream
    await opponentVideo.current.play().catch(console.error)
  })

  useEffect(() => {
    myVideo.current.srcObject = props.myStream;
    myVideo.current.play();
    console.log(myVideo);
  })

  return (
    <div className="battlepage">
      <p>BattlePage</p>
      <video width="400px" autoPlay muted playinline="true" ref={myVideo}>
      </video>
      <video width="400px" autoPlay muted playinline="true" ref={opponentVideo}>
      </video>
    </div>
  );
}

export default BattlePage;

