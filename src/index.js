import React from 'react';
import ReactDOM from 'react-dom';
import { Section, ProgressBar } from './Section';



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

    return (
      <div>
        <div>
          {userObj.map((obj) =>
            <Section key={obj.title} object={obj} sendData={this.getData} />
          )}
        </div>
      </div>
    )
  }
}


const userObj = [{ title: "title01", content: "content01\n nextline", complete: true, info: "10min" },
{ title: "title02", content: "content02", complete: false, info: "15min" },
{ title: "title03\n nextline", content: "content03\n nextline\n nexline", complete: false, info: "8min" }]


ReactDOM.render(<Home userObj={userObj} />, document.getElementById('root'))
