export default (state = [], action) => {
  switch (action.type) {
    case "GET_ADMIN":
      return [...action.payload];
    case "DELETE_USER":
      const users = [...state];
      const index = users.findIndex(user => user._id === action.value);
      users.splice(index, 1);
      return users;
    case "UPDATE_COIN_TOTAL":
      let usersUpdate = [...state];
      const updateIndex = usersUpdate.filter(
        user => user._id === action.value.id
      );
      updateIndex[0].coin_total = action.value.coins;
      return usersUpdate;
    case "CONTACT_FORM_SUCCESS":
      return "Message Sent";
    default:
      return state;
  }
};
