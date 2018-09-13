import _ from 'lodash';
import { READ_EVENTS } from "../actions";
// actionで定義したtypeをimportする



export default (events = {}, action) => { // .reducers/index.jsに渡せるようにexportを記載
    switch (action.type) {
        case READ_EVENTS:
            // [
            //   {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            //   {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // ]
            // {
            //   1:{id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            //   2:{id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // }
            //console.log(_.mapKeys(action.response.data))
            //console.log(action.response.data)
            return _.mapKeys(action.response.data, 'id')
        default:
            return events

    }
}

// 引数はstateとaction
// stateには初期値であるinitialStateが入る
// actionのtypeはaction.typeで取得できる