const WhoToFollowListItem = ({ avatarIcon, userName, handle }) => `
  <div class="list-group-item">
    <div class="row align-items-center">
      <img class="col-3 rounded-circle" src=${avatarIcon} />
      <div class="col-6 text-nowrap">
        <span class="fw-bold">${userName}</span>
        <span class="fa-stack wd-stack-width">
          <i class="fa-solid fa-circle fa-stack-1x"></i>
          <i class="fa-solid fa-check fa-stack-1x fa-xs fa-inverse"></i>
        </span>
        <div>${handle}</div>
      </div>
      <div class="col-3 px-0">
        <button class="btn btn-primary rounded-pill" type="button">Follow</button>
      </div>
    </div>
  </div>`;

export default WhoToFollowListItem;