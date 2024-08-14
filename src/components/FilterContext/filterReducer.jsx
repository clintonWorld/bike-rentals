export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_PRICE":
      return {
        ...state,
        price: payload,
      };
      break;

    case "UPDATE_LOCATION":
      return {
        ...state,
        location: payload,
      };

    case "UPDATE_ALL":
      return {
        ...state,
        all: payload,
      };

    case "SHOW_SIGN_UP":
      return {
        ...state ,
        showModal:true
      }

      case "HIDE_MODAL":
      return {
        ...state ,
        showModal:false
      }

      case "ADD_ARRAY":
      return {
        ...state ,
        updatedArray:payload
      }

    default:
      break;
  }
};
