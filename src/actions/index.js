export const INCREMENT = 'INCREMENT' 　
export const DECREMENT = 'DECREMENT'

//reducerで使うのでexportを記載する
//exportは他のモジュールで使い回せるようにする

export const increment = () => ({ //ActionCreater actonを返すメソッド
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

// actionはJavaScriptのオブジェクトのこと
// actionはtypeキーと値を持つこと、その値はユニークでなければならない
// コンポーネント側で利用するためにexportを記載する