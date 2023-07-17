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
        console.log(response, '')
        dispatch({ type: VENDORS.GET_VENDORS_LIST.SUCCESS, payload: response.data.results });
      } catch (e) {
        dispatch({ type: VENDORS.GET_VENDORS_LIST.ERROR });
      }
    };
  };
  