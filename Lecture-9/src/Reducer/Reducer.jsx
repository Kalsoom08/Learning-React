// const intitialState = {
//   count : 0
// };

// const Reducer = (state = intitialState, action)=>{
//   switch(action.type){
//     case "INC":
//       return {...state, count : state.count +2};
//     case "DEC":
//       return{...state, count: state.count - 2};
//     case "INC-BY-AMOUNT":
//       return{...state, count: state.count + action.payload};
//     default:
//       return state;
//   }
// }

// export default Reducer;

const initialCondition = {
  text : "Helo Helo"
}

const Reducer = ( state = initialCondition, action)=>{

  switch(action.type){
    case "Change-Text":
    return{...state, text: action.payload}

    default:
      return state;

}}

export default Reducer;