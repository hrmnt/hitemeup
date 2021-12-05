// Search

const body = document.querySelector("body");
const cart = document.querySelector(".cart");
const icon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const toClose = document.querySelector(".close");
const closeTetxt = document.querySelector(".close-text");
const searchInput = document.querySelector(".search-input");
const invisic = document.querySelector(".invisic");
const searchValue = document.getElementById("this-search");
const result = document.querySelector(".search-result");
const resultMobile = document.querySelector(".search-result-mobile");

const url = "http://185.46.10.229:3000/api";

var arrLang = {
  en: {
    discount: "Buy 2 and get 10% off",
    collections: "collections",
    home: "home",
    rus: "en",
    eng: "en",
    "sub-1": "",
    "sub-2": "Eco-friendly materials clothing production",
    new: "new arrivals ",
    parsing: "parsing",
    close: "close",
    relevant: "relevant",
    hoodie: "Hoodie",
    tshirt: "T-shirt",
    bkg: "background",
    follow: "follow HIT EM UP",
    province: "Province of Siberia",
    "intro-p-1":
      "The short story about us:  The idea itself appeared 2 years ago, after a tough history of MERCI(The founder of the “Hit ‘Em Up” brand)",
    "intro-p-2":
      "The brand name itself is a direct reference to Tupac Amaru Shakur’s track",
    "intro-p-3":
      'These are not just rags, but goods that have a meaning and a history. We will try to find your "key". In order for you to feel, that this item in your hands is alive, it is surrounded by ideas, meaning, and history.',
    "intro-p-4":
      "Presenting such important individuals and carrying the important message, we cannot neglect the quality. ",
    "intro-p-5":
      "We have built our own manufacture. Our team of designers not just makes it beautiful, but creates a puzzle from pieces of stories and facts. Our seamstresses with a huge experience of working at the sewing machine are versed in fabrics, like a …Van Gogh in Post-Impressionism.",
    "intro-p-6":
      "Before packing and shipping, each of our goods goes through 3 main stages of quality control with MERSI (The founder of the “Hit ‘Em Up” brand) personal presence.",
    quote: "“ Good art is not what it looks like but what it does to us.”",
    "intro-p-7":
      "Through the textile art, we have decided to express our emotions and the philosophy of Tupac Shakur. Please note, his ideas and view of society are very similar to ours.",
    "intro-p-8":
      "Our priority is to revive the semantic and historical currency, that is, unfortunately, fading, against the background of all the events in the World Wide Web.",
    "intro-p-9":
      "These clothes will be with you as a part of history and art. “The person who does not know his past cannot make the best of his future”. So, we set ourselves another task – to revive the currency of honor and, most importantly, honesty with yourself.  Loyalty to yourself is the basis of personality - this is what we will pass on to our descendants.",
    "intro-p-10":
      "Starting from the presentation of “All Eyez on Me”, all items come with a limited edition, each has an order number on it. The probability of a restock will be extremely small.",
    "parsing-text":
      "Here you can find the embedded story, references and Easter eggs of the lives of individuals we have printed on our products.",
    "pars-1":
      "Parsing of the illustration shown on the products of the collection:",
    release: "Release date ",
    empty: "",
    reference: "Reference to",
    "vegy-1":
      "June 1997, a rematch of heavyweights Mike Tyson and Evander Holyfield took place in Las Vegas. ",
    "vegy-2":
      "The rematch ended when Tyson was disqualified for biting off part of Holyfield's ear",
    shot: "Tyson and Tupac were friends. After Mike's victory on September 7, 1996, they were on way to a club to celebrate the victory. That evening, the car with Suge Knight and Tupac Shakur was shot.",
    fight: "All Mike Tyson fights",
    cuba: 'The date is highlighted in a red-black gradient, with a reference to the "7 days" theory, which states that Tupac planned his assassination attempt, and is now in Cuba.',
    insta: "PRESENTATION ON INSTAGRAM",
    trace:
      "Notice that in the article “The”, the letter “T” has a trace of a paint spray  - This object shows   the trace of a spray can from graffiti-which embodies: Business and the underground / Business and the street / Classics and hip-hop / This is not on the original magazine. ",
    felon:
      "three months earlier, Tupac was released from custody in a rape case. A deposit of $ 1.4 million was made for him).",
    murder:
      "(at the time of publication of the magazine, Snoop was on trial for the murder of a fighter of a hostile group- Philip Voldemariam)",
    continue: "to be continued …",
    sept: "september",
    price: " Price",
    rub: "rub",
    stock: "in stock",
    december: "december",
    march: "march",
    order: "made to order",
    sold: "SOLD OUT (no restock available)",
    back: "back to Collections",
    back2: "back",
    unisex: "Unisex",
    machine: "machine embroidery",
    silk: "silkscreen printing",
    fabric: "Fabric",
    footer: "Footer 2-thread",
    cotton: "95% cotton / 5% lycra",
    knit: "Interlock knit",
    size: "Size",
    toorder: "To order",
    placeOrder: "Place an order ",
    add: "add to shopping cart",
    oversize: "oversize",
    contact: "contact HIT ‘EM UP",
    contact2: "If necessary, contact HIT 'EM UP'",
    delivery: "Delivery",
    cdek: "cdek",
    rp: "Russian Post",
    model: "The height of the model in the photo:",
    male: "Male",
    female: "Female",
    uni: "GENERAL SIZE (UNIVERSAL)",
    width: "width",
    cm: "cm",
    height: "Length for human height",
    for: "for height",
    inf: "information",
    li1: "Select the number of products (Check the information carefully)",
    li2: "Select the delivery method ",
    li3: "Fill in the details of the payment section",
    li4: "Make a payment ",
    li5: "Expect feedback from our specialist to clarify the order status",
    li6: "If you have any questions, please contact HIT ' EM UP'",
    ddl: "The delivery time of the product depends on the collection section and the delivery address. ",
    day: "On average, delivery takes 3-4 days",
    cart: "shopping cart ",
    product: "Product",
    det: "Specify the required length of the product (For your height)",
    form: "Fill out the form",
    need: "This is necessary to process your order and clarify more accurate information if necessary",
    name: "Name",
    sname: "Last name",
    post: "Post",
    prname: "Product’s name ",
    comp: "Composition",
    calc: "MAKE A CALCULATION",
    cont: "CONTINUE SHOPPING",
    l1: "WE SAY THANK YOU",
    l2: " for your trust and wish you a pleasant use",
    l3: "Return to the main page in 5 seconds ...",
    city: "Select your city",
    "city-point": "Select the pick-up point",
  },
  ru: {
    rus: "ru",
    eng: "en",
    discount: "СКИДА 10% ПРИ ПОКУПКЕ 2 ТОВАРОВ",
    collections: "КОЛЛЕКЦИИ",
    home: "ГЛАВНАЯ",
    "sub-1": "Стиль отражения общества",
    "sub-2": "Собственное производство из экологичных материалов",
    new: "новинки",
    parsing: "разбор  ",
    close: "закрыть",
    relevant: "актуальное",
    hoodie: "Худи",
    tshirt: "Футболки",
    bkg: "история",
    follow: "ПОДПИСАТЬСЯ НА HIT EM UP",
    province: "Провинция Сибири",
    "intro-p-1":
      "Небольшое повествования о нас:  Сама идея выкристаллизовалась 2 года назад, после личной тяжелой истории MERSI(Основатель бренда ”Hit ‘Em Up”)",
    "intro-p-2":
      "Само название (Фраза) является прямой отсылкой к треку Амара Тупака Шакура,в переводе означающая “Поразить их” ",
    "intro-p-3":
      "Это не обычные тряпки, в этих изделиях заложен смысл и история. Мы будем пытаться найти Ваш “ключ” .Для того что бы Вы чувствовали, беря изделие в руки, что оно живое, оно окружено хромосферой идеи, смысла, посыла и истории.",
    "intro-p-4":
      "Презентуя таких личностей и неся такой смысловой посыл, мы не можем пренебрегать качеством.",
    "intro-p-5":
      "Мы возвели собственное производство. У нас команда дизайнеров, которые делают непросто красиво, а собирают пазл из кусочков историй и фактов. Швеи с огромным стажем работы за швейным станком и разбирающиеся в тканях, как Ван Гог в постимпрессионизме.",
    "intro-p-6":
      " Перед упаковкой и отправкой, каждое наше изделие проходит 3 основных этапа проверки качества с личным присутствием  (Основатель бренда Hit ‘Em Up).",
    quote:
      "«Искусство - это не то, что хорошо выглядит, но то, что меняет нас»",
    "intro-p-7":
      "Именно через тканевое искусство, мы решили выразить свои эмоции, и философию Тупака Шакура. Просим Вас заметить, его взгл идеи об обществе в мире очень схожи с нашими.",
    "intro-p-8":
      "Самое главное, мы намерены возродить смысловую и историческую валюту в обществе , которая, к сожалению, затухает, на фоне происходящих событий во всемирной паутине.",
    "intro-p-9":
      "Это вещи, которые будут с вами как часть истории и искусства. Человек, не знающий своего прошлого, не сможет выстроить “светлое” будущее, поэтому мы ставим перед собой еще одну задачу – возрождения валюты чести и самое главное честности перед самим собой. Верность перед самим собой – это основа личности - это то что Вы покажете и расскажите своим потомкам.",
    "intro-p-10":
      "Начиная с презинтации “All Eyez on Me ” все произведения идут с ограниченным тиражом, пронумерованным на изделии, вероятность рестока будет крайне мала",
    "parsing-text":
      "Здесь Вы сможете изучить заложенную историю, отсылки и пасхалки из жизни личностей, которых мы расположили и оформили на наши изделия.",
    "pars-1": "Разбор иллюстрации, изображенной на изделиях из коллекции:",
    release: "Дата релиза данного изделия",
    empty: "",
    reference: "Отсылка к журналу:",
    "vegy-1":
      "В июне 1997 года в Лас-Вегасе состоялся реванш супер тяжеловесов Майка Тайсона и Эвандера Холифилда. ",
    "vegy-2":
      "Бой завершился дисквалификацией “Железного Майка”, он откусил усок уха Холифилду.",
    shot: "Тасйон и Тупак были хорошими друзьями. После победы Майка в бою, 7 сентября 1996 года, они собирались ехать в клуб  праздновать победу. В этот вечер автомобиль, в котором находились Шуг Найт и Тупак Шакур, расстреляли.",
    fight: "Все бои Майка Тайсона",
    cuba: "Дата выделена красно- чёрным градиентом, с отсылкой к теории «7дней», в которой гласится, что Пак спланировал своё покушение, исейчас находится на Кубе.",
    insta: "ПРЕЗЕНТАЦИЯ В INSTAGRAM",
    trace:
      "Так же в артикле “The” от буквы “T” стекает след баллончика от краски – Данный объект показывает след баллончика от граффити – который олицетворяет: Бизнес и андеграунд / Деловитость и улица / Классика и хип-хоп / На оригинальном журнале этого нет.",
    felon:
      "Тупак Шакур Рэп звезда, осуждённый преступник (тремя месяцами ранее Тупак был освобожден из-под стражи по делу об изнасиловании.  За него внесли залог в размере 1.4 млн$).",
    murder:
      "Снуп Догг Рэп звезда, под судом (на момент публикации журнала, Снуп проходил по делу убийства бойца враждебной группировки Филиппа Волдемариама)",
    continue: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ ...",
    sept: "СЕНТЯБРЬ",
    price: " ЦЕНА",
    rub: "РУБЛЕЙ",
    stock: "ИЗДЕЛИЕ В НАЛИЧИИ",
    december: "ДЕКАБРЬ",
    march: "МАРТ",
    order: "ИЗДЕЛИЕ ПОД ЗАКАЗ",
    sold: "ИЗДЕЛИЕ РАСПРОДАНО (РЕСТОКА НЕТ)",
    back: "НАЗАД В “КОЛЛЕКЦИИ”",
    back2: "ВЕРНУТЬСЯ",
    unisex: "Унисекс",
    machine: "Машинная вышивка",
    silk: "шелкография",
    fabric: "Ткань",
    footer: "Футер 2-х нитка",
    cotton: "95% хлопка /  5% лайкеры",
    knit: "Кулирная гладь",
    size: "Размер",
    toorder: "Для заказа",
    placeOrder: "Оформите заказ на сайте",
    add: "ДОБАВИТЬ В КОРЗИНУ",
    oversize: "оверсайз",
    contact: "Связаться с HIT ‘EM UP",
    contact2: "При необходимости свяжетесь с HIT ‘EM UP",
    delivery: "Доставка",
    cdek: "СДЭК",
    rp: "Почта РФ",
    model: "Рост модели на фото:",
    male: "Парень",
    female: "Девушка",
    uni: "РАЗМЕР ОБЩИЙ (УНИВЕРСАЛЬНЫЙ)",
    width: "ширина",
    cm: "см",
    height: "ДЛИНА ПОД РОСТ ЧЕЛОВЕКА",
    for: "для роста",
    inf: "ИНФОРМАЦИЯ",
    li1: "Выполните выбор кол-ва изделия (Внимательно проверяйте информацию)",
    li2: "Выберете способ доставки изделия",
    li3: "Заполните данные раздела оплаты",
    li4: "Произведите оплату изделия",
    li5: "Ожидайте обратную связь от нашего специалиста для уточнения заказа",
    li6: "В случае возникновения вопросов - свяжетесь с HIT ‘EM UP",
    ddl: "Срок доставки изделия зависит от раздела коллекции и адреса доставки.",
    day: "В среднем доставка занимает 3-4 дня",
    cart: "КОРЗИНА",
    product: "Товар",
    det: "Укажите необходимую длину изделия (Под Ваш рост)",
    form: "АПОЛНИТЕ АНКЕТУ",
    need: "Это необходимо для обработки Вашего заказа и уточнения более точной информации при необходимости",
    name: "Имя",
    sname: "Фамилия",
    post: "Почта",
    prname: "Наименование товара",
    comp: "Состав",
    calc: "ПРОИЗВЕСТИ РАСЧЕТ",
    cont: "ПРОДОЛЖИТЬ ПОКУПКИ",
    l1: "МЫ ГОВОРИМ ВАМ СПАСИБО",
    l2: " За Ваше доверие и желаем приятного пользования",
    l3: "Возврат на главную страницу через 5 секунд ...",
    city: "Напишите Ваш город",
    "city-point": "Выберете пункт выдачи",
  },
};

$(document).ready(function () {
  // Handler for .ready() called.
  const lang = getLanguage();

  $("#cart-icon").hover(
    () => {
      console.log("GOVER");
      const items = localStorage.getItem("cart");
      const text =
        lang === "en"
          ? `<p>In cart ${JSON.parse(items).length} items</p>`
          : `<p>в корзине ${JSON.parse(items).length} вещей</p>`;

      const noitems =
        lang === "en" ? `<p>No items in cart</p>` : `<p>Корзина пуста</p>`;
      $("#cart-result").css("display", "block");
      if (items && JSON.parse(items).length > 0) {
        $("#cart-result").append(text);
      } else {
        $("#cart-result").append(noitems);
      }
    },
    () => {
      $("#cart-result").css("display", "none");
      $("#cart-result").empty();
    }
  );

  console.log("STARTED");
  const ss = $.get(`${url}/shopItem`, (data) => {
    let newStock = "";
    let stock = "";
    let order = "";
    let soldOut = "";

    const isEng = lang === "en";

    data.map((s) => {
      console.log(s);
      if (s.newStock) {
        newStock += `<a href="card-new.html?id=${s._id}" class="card">
        <img src="${url}${s.images[0]}" alt="Product example" />
        <h4 class="lang uppercase" >${
          s.collectionCloth[isEng ? "name_en" : "name_ru"]
        }</h4>
        <p class="uppercase">
          <span class="lang" key="price">ЦЕНА</span>: ${s.price}
          <span class="lang" key="rub">${
            s.currency[isEng ? "name_en" : "name_ru"]
          }</span>
        </p>
      </a>`;
      }
      if (s.stock) {
        stock += `<a href="card-new.html?id=${s._id}" class="card">
        <img src="${url}${s.images[0]}" alt="Product example" />
        <h4 class="lang uppercase" >${
          s.collectionCloth[isEng ? "name_en" : "name_ru"]
        }</h4>
        <p class="uppercase">
          <span class="lang" key="price">ЦЕНА</span>: ${s.price}
          <span class="lang" key="rub">${
            s.currency[isEng ? "name_en" : "name_ru"]
          }</span>
        </p>
      </a>`;
      }
      if (s.order) {
        order += `<a href="card-new.html?id=${s._id}" class="card">
        <img src="${url}${s.images[0]}" alt="Product example" />
        <h4 class="lang uppercase" >${
          s.collectionCloth[isEng ? "name_en" : "name_ru"]
        }</h4>
        <p class="uppercase">
          <span class="lang" key="price">ЦЕНА</span>: ${s.price}
          <span class="lang" key="rub">${
            s.currency[isEng ? "name_en" : "name_ru"]
          }</span>
        </p>
      </a>`;
      }
      if (s.soldOut) {
        soldOut += `<a href="card-new.html?id=${s._id}" class="card">
        <img src="${url}${s.images[0]}" alt="Product example" />
        <h4 class="lang uppercase" >${
          s.collectionCloth[isEng ? "name_en" : "name_ru"]
        }</h4>
        <p class="uppercase">
          <span class="lang" key="price">ЦЕНА</span>: ${s.price}
          <span class="lang" key="rub">${
            s.currency[isEng ? "name_en" : "name_ru"]
          }</span>
        </p>
      </a>`;
      }
    });

    $("#newStock").append(newStock);
    $("#stock").append(stock);
    $("#order").append(order);
    $("#soldOut").append(soldOut);
  });

  if (lang === "en") {
    document.getElementById("dropdown-img").src = "img/icons/EN.svg";
  } else {
    document.getElementById("dropdown-img").src = "img/icons/RU.svg";
  }

  $(".lang").each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

icon.onclick = function () {
  if ($(window).width() <= 834) {
    icon.classList.add("invisic");
    closeTetxt.classList.remove("invisic");
    search.classList.add("searching");
    toClose.classList.remove("invisic");
    cart.classList.toggle("invisic");
    resultMobile.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    search.classList.add("searching");
    toClose.classList.remove("invisic");
    searchInput.classList.remove("invisic");
    cart.classList.toggle("invisic");
    cover.style.display = "block";
    result.style.display = "block";
    body.style.overflow = "hidden";
  }
};

toClose.onclick = function () {
  searchValue.value = "";
  search.classList.remove("searching");
  toClose.classList.add("invisic");
  searchInput.classList.add("invisic");
  cart.classList.toggle("invisic");
  resultMobile.style.display = "none";
  cover.style.display = "none";
  result.style.display = "none";
  body.style.overflow = "auto";
  icon.classList.remove("invisic");
  closeTetxt.classList.add("invisic");
};
closeTetxt.onclick = function () {
  searchValue.value = "";
  search.classList.remove("searching");
  toClose.classList.add("invisic");
  searchInput.classList.add("invisic");
  cart.classList.toggle("invisic");
  resultMobile.style.display = "none";
  cover.style.display = "none";
  result.style.display = "none";
  body.style.overflow = "auto";
  icon.classList.remove("invisic");
  closeTetxt.classList.add("invisic");
};

//Show Cover

const getLanguage = () => {
  return localStorage.getItem("language");
};

const cover = document.querySelector(".cover");

// Close details
// const eng = document.getElementById("en-lang");
// const ru = document.querySelector("ru-lang");

// eng.onclick = function () {
//   console.log("EN");
//   document.getElementById("dropdown-img").src = "img/icons/EN.svg";
//   localStorage.setItem("language", "en");
// };
// $("#ru-lang").onclick = function () {
//   console.log("RU");
//   document.getElementById("dropdown-img").src = "img/icons/RU.svg";
//   localStorage.setItem("language", "ru");
// };

//add to cart button
const like = document.querySelector(".like");
const inactive = document.querySelector(".inactive-like");
const active = document.querySelector(".active-like");

$(".inactive-like").onclick = function () {
  inactive.style.display = "none";
  active.style.display = "block";
};
$(".active-like").onclick = function () {
  active.style.display = "none";
  inactive.style.display = "block";
};
const addToCart = document.querySelector(".add-to-cart");
const ok = document.querySelector(".ok-btn");

addToCart.onclick = function () {
  document.querySelector(".cart-window").style.display = "block";
  cover.style.display = "block";
  cover.style.height = "200vh";
};
ok.onclick = function () {
  document.querySelector(".cart-window").style.display = "none";
  cover.style.display = "none";
};
//connect button
const connect_btn = document.querySelector(".connect");
connect_btn.onclick = function () {
  connect_btn.innerHTML = "8 905 950 60 31";
};

// Showpong cart window
const allAdded = document.querySelector(".all-added-products");
const addedProductsNumber = cartWindow.children.length;
const addedProduct = document.getElementsByClassName("added-product");

for (var i = 0; i < addedProduct.length; i++) {
  if (addedProductsNumber <= 2) {
    addedProduct[i].style.width = "100%";
    addedProduct[i].style.margin = "auto";
  }
}
for (var i = 0; i < addedProduct.length; i++) {
  if (addedProductsNumber > 2) {
    addedProduct[i].style.width = "43%";
  }
}
