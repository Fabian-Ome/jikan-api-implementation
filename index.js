const mainContainer = document.getElementById('containerCards');
const button = document.getElementById('button');

const request = async (search) => {
  let nameAnime = document.getElementById('nameAnime').value;
  let api = `https://api.jikan.moe/v3/search/anime?q=${nameAnime}&limit=6`
  let response = await fetch(api)
  response = await response.json();
  search(response);
};

function paintInfo({ results }) {
  mainContainer.innerHTML = ' ';
  results.forEach(name => {
    const animecard = `
    <div class="col-lg-4 d-block justify-content-start my-2 icono-wrap">
      <img src="${name.image_url}" alt="img" class="image">
      <div>
        <h3 class="fs-5 mt-4 px-2 pb-1 titule">${name.title}</h3>
        <p class="text-white px-4">${name.synopsis}</p>
      </div>
    </div>`;
    mainContainer.innerHTML += animecard;
  });
}
button.addEventListener('click', () => request(paintInfo));