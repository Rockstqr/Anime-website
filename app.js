const animes = [
  {
    title: "Erased",
    image: "img/bokudakegainaimati.jpeg",
    description: "人類 vs 巨人の壮絶な戦いを描くダークファンタジー。",
    url: "https://www.shueisha.co.jp/books/items/contents.html?isbn=978-4-08-884653-8",
  },
  {
    title: "Kagurabati",
    image: "img/kagurabati.jpg",
    description: "刀匠を志す少年チヒロは、少年は憎しみを、決意の炎を心に宿すを描くダークファンタジー。",
    url: "https://www.shueisha.co.jp/books/items/contents.html?isbn=978-4-08-884653-8",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "TEXTTEXT texttext texttext texttext texttext",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext texttext texttext texttext texttext",
  },
];

const gallery = document.getElementById("gallery");

animes.forEach(anime => {
  const card = document.createElement("div");
  card.className = "card";

  if (anime.url) {
    card.innerHTML = `
    <a href="${anime.url}" target="_blank" class="card-link">
        <img src="${anime.image}" alt="${anime.title}">
        <div class="card-text">
          <h2>${anime.title}</h2>
          <p>${anime.description}</p>
        </div>
      </a>
    `;
  } else {


  card.innerHTML = `
    <img src="${anime.image}" alt="${anime.title}">
    <div class="card-text">
    <h2>${anime.title}</h2>
    <p>${anime.description}</p>
    </div>
  `;
  }
  gallery.appendChild(card);
});
