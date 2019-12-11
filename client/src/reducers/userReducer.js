export default (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return [...action.payload];
    case "DELETE_USER":
      const users = [...state];
      const index = users.findIndex(user => user.id === action.value);
      users.splice(index, 1);
      return users;
    case "UPDATE_COIN_TOTAL":
      return users;
    default:
      return state;
  }
};
