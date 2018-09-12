import { combineReducers } from 'redux'; //全てのreducerを結合するライブラリ
import count from './count'; // 各reducerをインポートする

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz }) 複数

// アプリケーション内に存在する全てのreducerを総括する
// 全てのreducerを一つのreducerに結合する