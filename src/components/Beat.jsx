import React from 'react';
import '../styles/style.css';
// props.provider     : 提供者名
// props.beat         : ビート名
// props.icon         : ボタンのアイコン(play/play)
// props.iconSwitcher : ボタンのアイコンを切り替える関数
let iconClass = "far fa-play-circle";
class Beat extends React.Component {
  render() {
    if (!this.props.beat) {
      return (
        <div className="beat">
          <div className="provider"><p>{this.props.provider}</p></div>
        </div>
      )
    } else {
      if (this.props.icon === "play") {
        iconClass = "far fa-play-circle";
      } else {
        iconClass = "far fa-stop-circle";
      }
      return (
        <div className="beat">
          <div className="beat-name">
            <i className={iconClass} onClick={this.props.iconSwitcher}></i>
            <p className="name">{this.props.beat}</p>
          </div>
        </div>
      )
    }
  }
};
export default Beat;