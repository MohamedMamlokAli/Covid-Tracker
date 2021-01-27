export const initialState={}
export const reducer =(state,action)=>{
 switch(action.type){
  case "ADD_TODAY":
   return action.payload;
  default:
   return state;
 }
}