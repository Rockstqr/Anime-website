const animes = [
  {
    title: "Erased",
    image: "img/erased.jpg",
    description: "人類 vs 巨人の壮絶な戦いを描くダークファンタジー。",
    url: "https://www.crunchyroll.com/series/GYGG92K7Y/erased?srsltid=AfmBOooRUwfIUsC8dlvqCKFcFMBkX8ziGpRa6EiR61rwtlQjgAJaUZxv",
  },
  {
    title: "Kagurabati",
    image: "img/kagurabati.jpeg",
    description: "刀匠を志す少年チヒロは、少年は憎しみを、決意の炎を心に宿すを描くダークファンタジー。",
    url: "https://kagurabachi.jp/",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "借金まみれで、貧乏な生活を送っていた少年デンジ。悪魔のポチタとデビルハンターとして生きていたが、ある日残虐な悪魔に狙われてしまい...!?",
    url: "https://chainsawman.dog/",
  },
  {
    title: "地獄楽",
    image: "https://contents.oricon.co.jp/upimg/news/20190610/2137249_201906100084485001560092418e.jpg",
    description: "不治の病を治す仙薬を求め画眉丸は独自の進化を遂げた島へと向かうがそこには...!?",
    url: "https://www.jigokuraku.com/",
  },
  {
    title: "Gantz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXDdRnWzWjDyUF32M0cMlNs_rX3pyAIwsvcD152CByFtJ2cFR8z_nYe2Pw0UqKjJi4WQ&usqp=CAU",
    description: "大阪編は大好物。ホスト侍(?)、狐、天狗のような日本古来の文化をキャラデザに見事に落とし込んでいて最高。",
    url: "https://www.crunchyroll.com/series/G6P8918Q6/gantz?srsltid=AfmBOop8kR8S7ASc8HnPLh4J6D4oez68eFGyioyJLzSOyHrzEBBcUKGf",
  },
  {
    title: "黄昏乙女×アムネジア",
    image: "https://m.media-amazon.com/images/I/61XGmvxkLiL._AC_UF1000,1000_QL80_.jpg",
    description: "夕子には、自分が死んだときの記憶がなく、なぜ幽霊になったのか分からない。夕子と貞一はその真相を探る。学校の怪談の謎に挑んでいくのだった...",
    url: "https://magazine.jp.square-enix.com/joker/series/amnesia/",
  },
  {
    title: "Final mouse",
    image: "https://finalmouse.com/cdn/shop/products/5711FD28-CCCC-44F7-88DE-64BB182C9E61.jpg?v=1736282186&width=450",
    description: "",
    url: "https://finalmouse.com/pages/mice",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext text",
    url: "",
  },
  {
    title: "Chainsaw man",
    image: "img/chainsawman.jpg",
    description: "texttext text",
    url: "",
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

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

