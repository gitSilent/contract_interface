import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  current_address: "0x00000000000000000000",
  contract_address: "0x000000",
  all_users_array: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_ADDRESS":
      return { ...state, current_address: action.payload };
    case "SET_CONTRACT_ADDRESS":
      return { ...state, contract_address: action.payload };
    case "SET_USERS_ARR":
      console.log(action.payload);
      return { ...state, all_users_array: action.payload };

    default:
      return state;
  }
};

export default configureStore({
  reducer: reducer,
});
