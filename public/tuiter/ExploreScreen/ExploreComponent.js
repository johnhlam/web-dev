import PostSummaryList from '../PostSummaryList/index.js'

const ExploreComponent = () => `
  <!-- Search bar and settings icon -->
  <div class="position-relative d-flex align-items-center mb-2">
    <input class="rounded-pill flex-grow-1 px-5 py-1 wd-search-bar wd-text-gray" type="search"
      placeholder="Search Tuiter" />
    <i class="fa-solid fa-magnifying-glass position-absolute wd-search-icon wd-text-gray"></i>
    <a class="mx-1 wd-settings-button" href="explore-settings.html">
      <i class="fa-solid fa-gear fa-xl"></i>
    </a>
  </div>
  <!-- Tabs -->
  <ul class="nav nav-tabs mb-2">
    <li class="nav-item"><a class="nav-link active" href="">For you</a></li>
    <li class="nav-item"><a class="nav-link" href="">Trending</a></li>
    <li class="nav-item"><a class="nav-link" href="">News</a></li>
    <li class="nav-item"><a class="nav-link" href="">Sports</a></li>
    <li class="nav-item"><a class="d-none d-md-block nav-link" href="">Entertainment</a></li>
  </ul>
  <!-- Image with overlaid text -->
  <div class="card">
    <img class="img-fluid" src="../images/spacex-starship.jpg" />
    <h3 class="card-img-overlay card-text fw-bold" id="spacex-text">SpaceX's Starship</h3>
  </div>
  ${PostSummaryList()}`;

export default ExploreComponent;
