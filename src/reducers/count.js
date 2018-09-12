import { INCREMENT , DECREMENT} from "../actions";
// actionで定義したtypeをimportする

const initialState = { value: 0}; 
// state(状態)の初期値

export default (state = initialState, action) => { // .reducers/index.jsに渡せるようにexportを記載
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + 1
            }
        case DECREMENT:
            return {
                value: state.value - 1
            }
        default:
            return state

    }
}

// 引数はstateとaction
// stateには初期値であるinitialStateが入る
// actionのtypeはaction.typeで取得できる