const initialState = {
  user: "rangga",
};

const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      // console.log("action ", action);
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default UserReducers;
