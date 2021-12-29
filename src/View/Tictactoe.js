
import React from 'react';
import '../sass/tictactoe.sass'

// 判斷贏家
function calculateWinner(squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
}


class Square extends React.Component {
  render(h) {
    return (
      <button
        className="square"
        onClick={() => {this.props.click()}}
      >{this.props.value}</button>
    )
  }
}

class Clear extends React.Component {
  render(h) {
   return (
    <button
      onClick={() => {this.props.click()}}
    >清除</button>
   ) 
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: false,
      winner: null,
      showClear: false
    }
  }

  // 清除
  handleClear() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: false,
      winner: null,
      showClear: false
    })
  }

  // 處理點擊格子事件
  handleClick(i) {
    // 勝負已分或該格已填則不能點擊
    if(this.state.winner || this.state.squares[i]) return 
    
    let newSquares = this.state.squares.slice()
    newSquares[i] = this.state.xIsNext ? 'O' : 'X'
    const winner = calculateWinner(newSquares)
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
      winner: winner || null,
      showClear: !!winner
    })
  }

  // 格子
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        click={() => {this.handleClick(i)}}
      >
      </Square>
    )
  }

  render(h) {
    const winner = calculateWinner(this.state.squares)
    const message = winner ? 
      'Winner is ' + winner :
      'Next Player is ' + (this.state.xIsNext ? 'O' : 'X');

    const clearDom = this.state.showClear ? (
      <div>
        <Clear click={() => {this.handleClear()}}></Clear>
      </div>
    ) : null
      
    return (
      <div className="board">
        <div className="board-title">{message}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {clearDom}
      </div>
    )
  }
}

class View extends React.Component {
  render(h) {
    return (
      <div className="game">
        <h2>Tic tac toe</h2>
        <Board></Board>
      </div>
    )
  }
}

function Tictactoe() {
  return (
    <View></View>
  )
}

export default Tictactoe;