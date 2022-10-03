const faqsContainer = document.querySelector(".faqs-pages-cards");

const faqsArr = [
  {
    ques: "Do you have Morning tuitions?",
    ans: "We do not have morning tuitions as most students have school at that time. Our tuition class slots start at 3 PM and go on till 9 PM.",
  },
  {
    ques: "Do you have Morning tuitions?",
    ans: "We do not have morning tuitions as most students have school at that time. Our tuition class slots start at 3 PM and go on till 9 PM.",
  },
  {
    ques: "Do you have Morning tuitions?",
    ans: "We do not have morning tuitions as most students have school at that time. Our tuition class slots start at 3 PM and go on till 9 PM.",
  },
  {
    ques: "Do you have Morning tuitions?",
    ans: "We do not have morning tuitions as most students have school at that time. Our tuition class slots start at 3 PM and go on till 9 PM.",
  },
  {
    ques: "Do you have Morning tuitions?",
    ans: "We do not have morning tuitions as most students have school at that time. Our tuition class slots start at 3 PM and go on till 9 PM.",
  },
];

for (let i = 0; i < faqsArr.length; i++) {
  const data = ` <div class="faqs-pages-card">
                    <div class="ques">
                        <p>Q${i + 1}. ${faqsArr[i].ques}</p>
                        <span class="ques-sign">&#10095;</span>
                    </div>
                    <p class="ans">
                    ${faqsArr[i].ans}
                    </p>
                </div>`;

  faqsContainer.insertAdjacentHTML("beforeend", data);
}

const ques = document.querySelectorAll(".ques");
const ans = document.querySelectorAll(".ans");
const quesSign = document.querySelectorAll(".ques-sign");

for (let i = 0; i < ans.length; i++) {
  ans[i].style.maxHeight = "0px";
}

for (let i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", () => {
    if (ans[i].style.maxHeight === "0px") {
      quesSign[i].style.transform = "rotate(270deg)";
      ans[i].style.maxHeight = "fit-content";
      ans[i].style.padding = "1.5% 2%";
    } else {
      quesSign[i].style.transform = "rotate(90deg)";
      ans[i].style.maxHeight = "0px";
      ans[i].style.overflow = "hidden";
      ans[i].style.padding = "0px";
    }
  });
}
