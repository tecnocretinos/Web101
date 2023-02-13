const totalItems = 826;
const container = document.getElementById("container");
var innerHtmlToAdd = "";

function formatItem(num) {
  const itemFormat = `
<div class="item-container">
        <div class="profile-header">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/${num}.jpeg"
            alt="user img"
            height="40"
            width="40"
          />
          <div class="profile-header-info">
            <p class="name">Nombre de usuario ${num}</p>
            <p class="username">@nombredeusuario${num}</p>
          </div>
        </div>
        <p class="twit">
            <b>${num}.</b> Lorem ipsum dolor sit amet. Et accusantium quia qui enim
          necessitatibus sed dolorem placeat qui quibusdam aperiam est doloribus
          nihil et perferendis neque!
        </p>
      </div>
`;
  return itemFormat;
}

function addItemsToContainer() {
  for (i = 1; i <= 826; i++) {
    const itemToAdd = formatItem(i);
    innerHtmlToAdd += itemToAdd;
  }
  container.innerHTML = innerHtmlToAdd;
}

addItemsToContainer();
