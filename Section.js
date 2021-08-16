import React from 'react';


export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
    }
  }

  render() {
    console.log("ProgressBar render")
    let ballColor = "DarkGrey"
    if (this.props.complete) { ballColor = "Fuchsia" }
    return (
      <div>

        <div className="PbTrack" style={{ width: "7px", height: this.props.height, backgroundColor: "DarkGrey", borderRadius: "8px", float: "left", marginLeft: "10px" }}>
          <div className="PbBar" style={{ width: "100%", height: this.props.percent, backgroundColor: "Fuchsia", borderRadius: "8px", float: "left" }} />
        </div>

        <div className="ball" style={{ content: "", width: "35px", height: "35px", backgroundColor: ballColor, position: "relative", float: "Left", borderRadius: "50%", border: "2px solid DarkGrey", top: "-6px", left: "-22px", fontSize: "10px", textAlign: "center", lineHeight: "35px" }} >
          <div style={{ color: "white" }}>
            {this.props.complete ? "done" : this.props.info}
          </div>
        </div>

      </div>
    )
  }
}


export class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.object.title,
      content: this.props.object.content,
      complete: this.props.object.complete,
      info: this.props.object.info,
      last: this.props.object.last,
      height: "22px",
      percent: "0%",
      fold: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.setHeight = this.setHeight.bind(this)
  }

  handleClick() {
    if (!(this.state.complete)) {
      this.setState({
        complete: true,
        percent: "100%"
      })
      let value = this.state.title
      console.log("value", value)
      this.props.sendData(value);
    }
  }

  setHeight() {
    console.log("setH", this.state.title)
    var h = document.getElementById(this.state.title)
    var s = (h.offsetHeight + 18.4).toString() + "px"
    if (this.state.complete) {
      this.setState({
        height: s,
        percent: "100%"
      })
    }
    else {
      this.setState({
        height: s,
      })
    }
  }

  componentDidMount() {
    console.log("DidMount", this.state.title)
    this.setHeight()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate", this.state.title)
    if (this.props.object.last && !(prevProps.object.last)) {
      this.setState({
        last: this.props.object.last,
        fold: false
      })
    }
    if (!(this.state.fold) && prevState.fold) {

      this.setHeight()
    }
  }

  render() {
    console.log("rendor in Section", this.state.title, this.state.height)
    return (
      <div>
        <div id={this.state.title}>
          <ProgressBar height={this.state.height} percent={this.state.percent} info={this.state.info} complete={this.state.complete} />
          <h3 style={{ marginLeft: "40px", whiteSpace: 'pre-wrap', position: "relative", left: "-19px" }}> {this.state.title} </h3>
          {this.state.last &&
            <div style={{ marginLeft: "40px", whiteSpace: 'pre-wrap' }}> {this.state.content} </div>}
          {this.state.last &&
            <button onClick={this.handleClick} style={{ marginLeft: "40px", position: "relative", left: "-14px" }}> Continue </button>}
        </div>
      </div>
    )
  }
}
