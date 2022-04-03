import React from 'react';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import NavigationSidebar from './NavigationSidebar';
import WhoToFollowList from './WhoToFollowList';
import whoReducer from "../../reducers/WhoReducer";
import tuitsReducer from '../../reducers/TuitsReducer';
import navItemsReducer from '../../reducers/NavItemsReducer';
import postItemsReducer from '../../reducers/PostsReducer';
import "./styles.css";

const reducer = combineReducers({
  navItems: navItemsReducer,
  posts: postItemsReducer,
  tuits: tuitsReducer,
  who: whoReducer,
});
const store = createStore(reducer);
const Tuiter = () => {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
};

export default Tuiter;