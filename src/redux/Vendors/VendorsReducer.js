import { VENDORS } from "./VendorsConstant";

const initialState = {
  list: {
    loading: false,
    finalResult: [],
    failed: false,
    total: 0,
    openCount: 0,
  },
};

const serializerList = (state, payload) => {
  if (payload.page > 0) {
    return [...state, ...payload.data.finalResult.filter((item) => item.type === 'VENDOR')]
  }
  return payload.data.finalResult.filter((item) => item.type === 'VENDOR');
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case VENDORS.GET_VENDORS_LIST.REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case VENDORS.GET_VENDORS_LIST.SUCCESS:
      return {
        ...state,
        list: {
          loading: false,
          finalResult: serializerList(state.list.finalResult, action.payload),
          failed: false,
          total: action.payload.data.count,
          openCount: action.payload.data.open_count,
        },
      };
    case VENDORS.GET_VENDORS_LIST.ERROR:
      return {
        ...state,
        list: {
          loading: false,
          finalResult: [],
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
