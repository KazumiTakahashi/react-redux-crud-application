import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // storeを作成するためのライブラリ
import { Provider } from 'react-redux'; // 作成したstoreを全componentへ渡すためのライブラリ

import './index.css';
import reducer from './reducers'; //reducerのインポート
import App from './components/App'; //html
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer) 
// アプリケーション内の全てのstateはstoreに集約されている


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
