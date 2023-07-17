import { VENDORS } from "./VendorsConstant";
import instance from '../request';
import { getVendorsListService } from './VendorsService';

export const getVendorsListAction = (params) => {
    return async (dispatch) => {
      dispatch({ type: VENDORS.GET_VENDORS_LIST.REQUEST });
      try {
        const response = await instance.get(getVendorsListService(), {
            params,
        });
        dispatch({ type: VENDORS.GET_VENDORS_LIST.SUCCESS, payload: {
          data: response.data.data,
          page: params.page,
        } });
      } catch (e) {
        dispatch({ type: VENDORS.GET_VENDORS_LIST.ERROR });
      }
    };
  };
  