import React from 'react';
import ReactDOM from 'react-dom';
//import React, { useState, useEffect } from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.object.title,
      content: this.props.object.content,
      complete: this.props.object.complete,
      last: this.props.object.last,
      height: "22px",
      percent: "0%",
      fold: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.setHeight = this.setHeight.bind(this)
  }

  handleClick() {
    this.setState({
      complete: true,
      percent: "100%"
    })
    let value = this.state.title
    console.log("value", value)
    this.props.sendData(value);
  }

  setHeight() {
    console.log("setH", this.state.title)
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

  componentDidMount() {
    console.log('Section DidMount', this.state.title)
    console.log(this.state)
    this.setHeight()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('SectionDidUpdate', this.state.title)
    if (this.props.object.last && !(prevProps.object.last)) {
      console.log("check last", this.state.title)
      this.setState({
        last: this.props.object.last,
        fold: false
      })
    }
    console.log("H", this.state.height, "preH", prevState.height,
      "nowlast", this.state.last, "props.last", this.props.object.last, "preProps.last", prevProps.object.last)
    if (!(this.state.fold) && prevState.fold) {
      console.log("check height", this.state.title)
      this.setHeight()
    }
  }

  render() {
    console.log("rendor in Section", this.state.title, this.state.height)
    //console.log("this.state", this.state)
    //console.log("this.props.object", this.props.object)
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "7px", height: this.state.height, borderRadius: "10px", float: "Left" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: "100%", height: this.state.percent, borderRadius: "10px", float: "Left" }}>
          </div>
        </div>
        <div id={this.state.title}>
          <h3 style={{ marginLeft: "20px", whiteSpace: 'pre-wrap' }}> {this.state.title} </h3>
          {this.state.last &&
            <div style={{ marginLeft: "20px", whiteSpace: 'pre-wrap' }}> {this.state.content} </div>}
          {this.state.last &&
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
      userObj: this.props.userObj,
      first: true
    }
    this.getData = this.getData.bind(this)
  }

  getData(val) {
    console.log("get", val);

    let objs = [...this.state.userObj]
    for (let i = 0; i < this.state.userObj.length; i++) {
      if (this.state.userObj[i].title === val) {
        let obj = { ...objs[i] }
        obj.complete = true
        objs[i] = obj
        if (i + 1 < this.state.userObj.length) {
          let obj1 = { ...objs[i + 1] }
          obj1.last = true
          objs[i + 1] = obj1
        }
        this.setState({
          userObj: objs,
          first: false
        })
      }
    }
  }

  render() {
    console.log("render in Home")
    const userObj = this.state.userObj
    if (this.state.first) {
      userObj[0].last = true
      for (let i = 1; i < userObj.length; i++) {
        userObj[i].last = userObj[i - 1].complete
      }
    }

    //console.log("userObj", userObj)
    return (
      <div>
        <div>Head</div>
        <div>
          {userObj.map((obj) =>
            <Section key={obj.title} object={obj} sendData={this.getData} />
          )}
        </div>
      </div>
    )
  }
}


const userObj = [{ title: "title01", content: "content01\n nextline", complete: false },
{ title: "title02", content: "content02", complete: false },
{ title: "title03\n nextline", content: "content03\n nextline\n nexline", complete: false }]

ReactDOM.render(<Home userObj={userObj} />, document.getElementById('root'))
