import React from 'react';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.object.title,
      content: this.props.object.content,
      complete: this.props.object.complete,
      height: "22px",
      percent: "0%"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      percent: "100%"
    })
  }

  componentDidMount() {
    console.log('Section DidMount')
    console.log(this.state)
    var h = document.getElementById(this.state.title)
    var s = (h.offsetHeight).toString() + "px"
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

  render() {
    console.log("rendor in Section", this.state.height)
    console.log(this.state)
    let id = this.state.title
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "7px", height: this.state.height, borderRadius: "10px", float: "Left" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: "100%", height: this.state.percent, borderRadius: "10px", float: "Left" }}>
          </div>
        </div>
        <div id={this.state.title}>
          <div style={{ marginLeft: "20px", whiteSpace: 'pre-wrap' }}> {this.state.title} </div>
          {this.state.complete &&
            <div style={{ marginLeft: "20px", whiteSpace: 'pre-wrap' }}> {this.state.content} </div>}
          {this.state.complete &&
            <button onClick={this.handleClick} style={{ marginLeft: "20px" }}> Continue </button>}
        </div>
      </div>
    )
  }
}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      complete: false
    }
  }

  render() {
    console.log("render in Home")
    const userObj = this.props.userObj
    return (
      <div>
        <div>Head</div>
        <div>
          {userObj.map((object) =>
            <Section key={object.title} object={object} />
          )}
        </div>
      </div>
    )
  }
}


//const userObj = {title: "title01", content: "content01", complete: true }
const userObj = [{ title: "title01", content: "content01\n nextline", complete: true },
{ title: "title02", content: "content02", complete: false },
{ title: "title03", content: "content03", complete: false }]

ReactDOM.render(<Home userObj={userObj} />, document.getElementById('root'))
