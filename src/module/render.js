const ulContainer = document.querySelector('.list-content');

const renderContent = (item) => {
  ulContainer.innerHTML += `
    <li class="list-items">
      <div class="render-div">
        <input class="check" type="checkbox">
        <input class="task-description" value=${item.description} />
      </div>
      <div class="icon-content">
        <i class="fa-solid fa-ellipsis-vertical three-dots"></i>
        <i id="${item.index}" class="sective fa-solid fa-trash-can remove"></i>
      </div>
    </li>`;
};

export default renderContent;