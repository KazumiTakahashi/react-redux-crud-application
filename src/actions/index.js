import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS' 　


//reducerで使うのでexportを記載する
//exportは他のモジュールで使い回せるようにする

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => { //ActionCreater actonを返すメソッド
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({type: READ_EVENTS, response})
}



// actionはJavaScriptのオブジェクトのこと
// actionはtypeキーと値を持つこと、その値はユニークでなければならない
// コンポーネント側で利用するためにexportを記載する