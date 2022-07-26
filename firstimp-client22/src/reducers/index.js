import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { pageStateReducer } from "./pageStateReducer";
import { shippingAddReducer } from "./shippingAddReducer";
import { walletReducer } from "./walletReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
  pageState: pageStateReducer,
  shippingAdd:shippingAddReducer,
  wallet:walletReducer
});

export default rootReducer;
