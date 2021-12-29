
import React from 'react';
import '../sass/header.sass'
import {useLocation} from 'react-router-dom'

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleRouteToTitleName(route) {
    let name = ''
    switch (route) {
      case '/':
        name = '首頁'
        break
      case '/tictactoe':
        name = 'OOXX'
        break
      default:
        name = '沒這頁喔'
    }
    return name
  }

  componentDidMount() {
    const {routeLocation} = this.props
    const title = this.handleRouteToTitleName(routeLocation)
    this.setState({
      title
    })
  }

  componentDidUpdate() {
    const {routeLocation} = this.props
    const title = this.handleRouteToTitleName(routeLocation)
    if(this.state.title !== title) {
      this.setState({
        title
      })
    }
  }

  render(h) {
    return (
      <div className="header">
        {this.state.title}
      </div>
    )
  }
}

function Header () {
  // 取得router path name
  let location = useLocation();

  return (
    <View routeLocation={location.pathname}></View>
  )
}

export default Header