import NavigationSidebar from '../NavigationSidebar/index.js'; // TODO: Why can't I just import from the folder?
import ExploreComponent from "./ExploreComponent.js"; // TODO: Why do I need the extension here?
import WhoToFollowList from '../WhoToFollowList/index.js';

// TODO: How does this work?
// TODO: Is there any functionality actually being added in this HW? It
//       seems like we're rewriting everything using JQuery
// TODO: How to fix fa-inverse to work properly to display checkmarks/more icon?
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
              ${NavigationSidebar()}
          </div>
          <div class="col-10 col-lg-7 col-xl-6">
              ${ExploreComponent()}
          </div>
          <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              ${WhoToFollowList()}
          </div>
        </div>
    `);
})($);
