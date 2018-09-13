import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect関数はstoreやactionとの関連付け
import _ from 'lodash';
import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  readEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  //constructorはcomponentの初期化時に実行させるコールバック　状態の初期化をしていたが、その役割はreducerで行うので不要
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.readEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents }) 

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex);

// connect関数を使用してstateやactionとの関連付けを行って,viewのイベントで状態を遷移させて遷移後の状態を画面に再描画させる
// mapStateToProps：stateの情報からこのcomponentで必要なものを取り出して、
// component内のpropsとしてマッピングする機能を持つ関数
// 引数には状態のトップレベルを示すstateを書いてどういったオブジェクトをpropsとして対応させるのか、関数の戻り値に定義する
// mapDispatchToProps：あるactionが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数
