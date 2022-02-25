const PostSummaryItem = ({ topic, userName, time, image, title }) => `
  <a class="list-group-item list-group-item-action" href="#">
    <div class="row align-items-center">
      <div class="col-10">
        <div class="wd-text-gray">${topic}</div>
        <div>
          <span class="fw-bold">${userName}</span>
          <span class="fa-stack wd-stack-width">
            <i class="fa-solid fa-circle fa-stack-1x"></i>
            <i class="fa-solid fa-check fa-stack-1x fa-xs fa-inverse"></i>
          </span>
          <span class="wd-text-gray"> - ${time}</span>
        </div>
        <div class="fw-bold">
          ${title}
        </div>
      </div>
      <div class="col-2">
        <img class="img-fluid rounded float-end" src="${image}" />
      </div>
    </div>
  </a>`;

export default PostSummaryItem;