import React, { useState } from 'react';
import '../styles/style.css';
import Header from './Header.jsx';
import Beat from './Beat.jsx';
// props.selectPrev : トップに戻る処理

const BeatListPage = (props) => {
  const initialBeats = [
    {
      provider: "ゆの(NA3TY)",
      beat: null,
      icon: null,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "BPM94(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "じょう2号(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "じょう3号(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "すばやいビート(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Bounce＄(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "シャチトラップ(戦国MCBATTLE提供)",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: "LUKA THE KISARAGI",
      beat: null,
      icon: null,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat10",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat17",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat20",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat27",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat37",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat38",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "Beat49",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: "華偶",
      beat: null,
      icon: null,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "操ル人形",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "決戦",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "仔羊",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "獅子",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
    {
      provider: null,
      beat: "富嶽",
      icon: false,
      iconSwitcher: (e, index) => iconSwitcher(e, index),
    },
  ];

  const [beats, setBeats] = useState(initialBeats);

  const iconSwitcher = (e, index) => {
    // コピーする
    let copyBeats = [...beats];

    // クリックしたものが再生されていたらfalseにする
    if (copyBeats[index].icon) {
      copyBeats[index].icon = false;
    } else {
      // trueのものは全てfalseにする
      for (const value of copyBeats) {
        if (value.icon) {
          value.icon = false;
        }
      }
      // クリックしたものだけtrue
      copyBeats[index].icon = true;
    }

    setBeats(copyBeats);
  }

  return (
    <div className="beatlist">
      <Header selectPrev={props.selectPrev} footer="null" prevtext="show" />
      {
        beats.map((value, index) => {
          return <Beat key={index} provider={value.provider} beat={value.beat} icon={value.icon ? "stop" : "play"} iconSwitcher={e => value.iconSwitcher(e, index)} />
        })
      }
    </div>
  )
};

export default BeatListPage;