export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "add to basket":
      // logic for adding Basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // logic for removing Basket
    case "remove basket":
        // we cloned the basket
      let newBasket = [...state.basket];
      // we check to see if product exist,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Item exist in basket remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove product (id: ${action.id} as its)`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return{
        ...state,
        user : action.user
      }
    default:
      return state;
  }
};

export default reducer;
