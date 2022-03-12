const NavigationSidebar = () =>  `
    <div class="list-group">
      <span class="list-group-item"><i class="fa-brands fa-twitter"></i></span>
      <a class="list-group-item list-group-item-action" href="home.html">
        <i class="fa-solid fa-house-chimney"></i>
        <span class="d-none d-xl-inline">Home</span>
      </a>
      <a class="list-group-item list-group-item-action active" href="#">
        <i class="fa-solid fa-hashtag"></i>
        <span class="d-none d-xl-inline">Explore</span>
      </a>
      <a class="list-group-item list-group-item-action" href="notifications.html">
        <i class="fa-solid fa-bell"></i>
        <span class="d-none d-xl-inline">Notifications</span>
      </a>
      <a class="list-group-item list-group-item-action" href="messages.html">
        <i class="fa-solid fa-envelope"></i>
        <span class="d-none d-xl-inline">Messages</span>
      </a>
      <a class="list-group-item list-group-item-action" href="bookmarks.html">
        <i class="fa-solid fa-bookmark"></i>
        <span class="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a class="list-group-item list-group-item-action" href="lists.html">
        <i class="fa-solid fa-list"></i>
        <span class="d-none d-xl-inline">Lists</span>
      </a>
      <a class="list-group-item list-group-item-action" href="profile.html">
        <i class="fa-solid fa-user"></i>
        <span class="d-none d-xl-inline">Profile</span>
      </a>
      <a class="list-group-item list-group-item-action" href="more.html">
        <span class="fa-stack wd-stack-width">
          <i class="fa-solid fa-circle fa-stack-1x"></i>
          <i class="fa-solid fa-ellipsis fa-stack-1x fa-xs fa-inverse"></i>
        </span>
        <span class="d-none d-xl-inline">More</span>
      </a>
    </div>
    <button class="btn btn-primary rounded-pill my-2 wd-tweet-button" type="button">Tweet</button>`;
export default NavigationSidebar;