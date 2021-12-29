import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

class View extends Component {
  render(h) {
    const navList = [
      {name: 'Home', link: ''},
      {name: 'ＯＯＸＸ', link: 'tictactoe'}
    ]

    let navHtml = []
    navHtml = navList.map(el => {
      return <Link className="App-link" to={`/${el.link}`} key={el.name}>{el.name}</Link>
    })

    return (
      <div className="home">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Link className="App-link" to="/tictactoe">Tic Tac Toe</Link> */}
        {navHtml}
      </div>
    )  
  }
}

function Home() {
  return (
    <View></View>    
  )
}

export default Home