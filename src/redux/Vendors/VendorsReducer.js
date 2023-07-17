import { VENDORS } from "./VendorsConstant";

const initialState = {
  list: {
    loading: false,
    data: [],
    failed: false,
  },
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case VENDORS.GET_VENDORS_LIST.REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          data: [],
          failed: false,
        },
      };
    case VENDORS.GET_VENDORS_LIST.SUCCESS:
      return {
        ...state,
        list: {
          loading: false,
          data: action.payload,
          failed: false,
        },
      };
    case VENDORS.GET_VENDORS_LIST.ERROR:
      return {
        ...state,
        list: {
          loading: false,
          data: [],
          failed: true,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default VendorReducer;
