import { combineReducers } from 'redux'; //全てのreducerを結合するライブラリ
import events from './events'; // 各reducerをインポートする

export default combineReducers({ events })
