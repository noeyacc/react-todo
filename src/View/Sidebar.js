import React, {Component} from "react";
import { Link, useLocation } from "react-router-dom";
import '../sass/sidebar.sass'

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {name: '首頁', link: ''},
        {name: '圈圈叉叉', link: 'tictactoe'}
      ]
    }
  }

  // 選單 li Dom
  liElement(el) {
    return (
      <li key={el.name}>
        <Link className={el.isActive ? 'is-active' : ''} to={`/${el.link}`}>{el.name}</Link>
      </li>
    )
  }

  render(h) {
    const { routeLocation } = this.props
    const navList = this.state.navList.slice()
    const navHtml = navList.map(el => {
      el.isActive = el.link === routeLocation.slice(1)
      const text = this.liElement(el)
      return text
    })

    return (
      <div className="sidebar">
        <ul>
          {navHtml}
        </ul>
      </div>
    )
  }
}

function Sidebar () {
  // 取得router path name
  let location = useLocation();

  return (
    <View routeLocation={location.pathname}></View>
  )
}

export default Sidebar