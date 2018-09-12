import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect関数はstoreやactionとの関連付け

import { increment, decrement } from '../actions';

class App extends Component {
  //constructorはcomponentの初期化時に実行させるコールバック　状態の初期化をしていたが、その役割はreducerで行うので不要
  render() {
    const props = this.props  // propsには状態やactionを渡すので変数に入れておく

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement}) //こんな書き方もある

export default connect(mapStateToProps,mapDispatchToProps)(App);

// connect関数を使用してstateやactionとの関連付けを行って,viewのイベントで状態を遷移させて遷移後の状態を画面に再描画させる
// mapStateToProps：stateの情報からこのcomponentで必要なものを取り出して、
// component内のpropsとしてマッピングする機能を持つ関数
// 引数には状態のトップレベルを示すstateを書いてどういったオブジェクトをpropsとして対応させるのか、関数の戻り値に定義する
// mapDispatchToProps：あるactionが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数
