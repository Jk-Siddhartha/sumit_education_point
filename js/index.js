const categoriesCards = document.querySelector(".categories-cards");
const classCategoryArr = [
  {
    src: "./images/class 9.jpg",
    class: "Class 9",
  },
  {
    src: "./images/class 10.jpg",
    class: "Class 10",
  },
  {
    src: "./images/class 11.jpg",
    class: "Class 11",
  },
  {
    src: "./images/class 12.jpg",
    class: "Class 12",
  },
];

const videoContainer = document.querySelector(".our-free-videos-cards");
const classVideoArr = [
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

for (let i = 0; i < classCategoryArr.length; i++) {
  const data = `            <div class="category-card">
              <img src="${classCategoryArr[i].src}" alt="" class="card-img" />
              <p>${classCategoryArr[i].class}</p>
            </div>`;

  categoriesCards.insertAdjacentHTML("beforeend", data);
}

for (let i = 0; i < classVideoArr.length; i++) {
  const data = `<iframe src="${classVideoArr[i]}"> </iframe>`;
  videoContainer.insertAdjacentHTML("beforeend", data);
}

const reviewContainer = document.querySelector(".reviews-from-students-cards");
const reviewArr = [
  {
    logo: "./images/reviewer-logo.png",
    name: "User",
    class: "Class 9",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sinthic recusandae quidem? Pariatur unde suscipit quasi nullanesciunt minima commodi similique ex! Expedita dolore reiciendissimilique. Officiis eum dolores facilis",
  },
  {
    logo: "./images/reviewer-logo.png",
    name: "User",
    class: "Class 9",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sinthic recusandae quidem? Pariatur unde suscipit quasi nullanesciunt minima commodi similique ex! Expedita dolore reiciendissimilique. Officiis eum dolores facilis",
  },
  {
    logo: "./images/reviewer-logo.png",
    name: "User",
    class: "Class 9",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sinthic recusandae quidem? Pariatur unde suscipit quasi nullanesciunt minima commodi similique ex! Expedita dolore reiciendissimilique. Officiis eum dolores facilis",
  },
  {
    logo: "./images/reviewer-logo.png",
    name: "User",
    class: "Class 9",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sinthic recusandae quidem? Pariatur unde suscipit quasi nullanesciunt minima commodi similique ex! Expedita dolore reiciendissimilique. Officiis eum dolores facilis",
  },
  {
    logo: "./images/reviewer-logo.png",
    name: "User",
    class: "Class 9",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sinthic recusandae quidem? Pariatur unde suscipit quasi nullanesciunt minima commodi similique ex! Expedita dolore reiciendissimilique. Officiis eum dolores facilis",
  },
];

for (let i = 0; i < reviewArr.length; i++) {
  const data = `            <div class="reviews-from-students-card">
              <div class="reviewers-details">
                <img
                  src="${reviewArr[i].logo}"
                  alt=""
                  class="reviewer-logo"
                />
                <div>
                  <p class="reviewer-name">${reviewArr[i].name}</p>
                  <p class="reviewer-class">${reviewArr[i].class}</p>
                </div>
              </div>
              <pv class="review">
                ${reviewArr[i].review}
              </p>
            </div>`;

  reviewContainer.insertAdjacentHTML("beforeend", data);
}

const menuIcon = document.querySelector(".menu-icon");
const menus = document.querySelector(".menus");

menus.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (menus.style.maxHeight === "0px") {
    menus.style.maxHeight = "8rem";
  } else {
    menus.style.maxHeight = "0px";
    menus.style.overflow = "hidden";
  }
});
