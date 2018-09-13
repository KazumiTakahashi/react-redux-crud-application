import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // storeを作成するためのライブラリ ,ミドルウェアthunkを使えるようにする関数
import { Provider } from 'react-redux'; // 作成したstoreを全componentへ渡すためのライブラリ
import thunk from 'redux-thunk';

import './index.css';
import reducer from './reducers'; //reducerのインポート
import EventsIndex from './components/events_index'; //html
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk)) 
// アプリケーション内の全てのstateはstoreに集約されている


ReactDOM.render(
    <Provider store={store}>
        <EventsIndex />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
