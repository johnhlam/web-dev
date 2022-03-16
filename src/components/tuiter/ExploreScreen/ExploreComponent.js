import PostSummaryList from '../PostSummaryList/index.js';
import './styles.css';
import '../styles.css';

const ExploreComponent = () => (
  <>
    <div className="position-relative d-flex align-items-center mb-2">
      <input className="rounded-pill flex-grow-1 px-5 py-1 wd-search-bar wd-text-gray" type="search"
        placeholder="Search Tuiter" />
      <i className="fa-solid fa-magnifying-glass position-absolute wd-search-icon wd-text-gray"></i>
      <a className="mx-1 wd-settings-button" href="explore-settings.html">
        <i className="fa-solid fa-gear fa-xl"></i>
      </a>
    </div>
    <ul className="nav nav-tabs mb-2">
      <li className="nav-item"><a className="nav-link active" href="">For you</a></li>
      <li className="nav-item"><a className="nav-link" href="">Trending</a></li>
      <li className="nav-item"><a className="nav-link" href="">News</a></li>
      <li className="nav-item"><a className="nav-link" href="">Sports</a></li>
      <li className="nav-item"><a className="d-none d-md-block nav-link" href="">Entertainment</a></li>
    </ul>
    <div className="card">
      <img className="img-fluid" src="./images/spacex-starship.jpg" />
      <h3 className="card-img-overlay card-text fw-bold" id="spacex-text">SpaceX's Starship</h3>
    </div>
    {PostSummaryList()}
  </>
);

export default ExploreComponent;
