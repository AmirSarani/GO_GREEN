import "./style.css";

// <!-- header section -->

let header = document.getElementById("header") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    header.classList.add("headerColor");
  } else {
    header.classList.remove("headerColor");
  }
});

// <!-- Our Portfolio Section -->

const all = document.getElementById("All") as HTMLElement;
const WebDesign = document.getElementById("WebDesign") as HTMLElement;
const WebDevelopment = document.getElementById("WebDevelopment") as HTMLElement;
const AppDesign = document.getElementById("AppDesign") as HTMLElement;
const AppDevelopment = document.getElementById("AppDevelopment") as HTMLElement;

const products = [
  {
    title: "Lorem ipsum dolor",
    sub: "WEB DESIGN",
    img: "../media/portfolio-1.jpg",
  },

  {
    title: "Nulla ullamcorper pharetra",
    sub: "WEB DEVELOPMENT",
    img: "../media/portfolio-2.jpg",
  },

  {
    title: "Phasellus eget dictum",
    sub: "APP DESIGN",
    img: "../media/portfolio-3.jpg",
  },
  {
    title: "Donec mattis vestibulum",
    sub: "APP DEVELOPMENT",
    img: "../media/portfolio-4.jpg",
  },

  {
    title: "Pellentesque ullamcorper",
    sub: "WEB DESIGN",
    img: "../media/portfolio-5.jpg",
  },
  {
    title: "Sed pretium sapien",
    sub: "WEB DEVELOPMENT",
    img: "../media/portfolio-6.jpg",
  },
];

console.log(products);

document.addEventListener("DOMContentLoaded", () => {
  let alls = products.filter((products) => products);

  AddHtml.innerHTML = "";

  alls.forEach((elm) => {
    AddHtml.innerHTML += `
      <div
        class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover">
        <p class="text-[19px]">${elm.title}</p>
        <span class="text-[13px]">${elm.sub}</span>
      </div>
    `;
  });
});

let AddHtml = document.getElementById("AddHtml") as HTMLElement;

all.addEventListener("click", () => {
  let alls = products.filter((products) => products);

  AddHtml.innerHTML = "";

  alls.forEach((elm) => {
    AddHtml.innerHTML += `



    <div
          class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover"
        >
          <p class="text-[19px]">${elm.title}</p>
          <span class="text-[13px]">${elm.sub}</span>
        </div>
`;
  });
});

WebDesign.addEventListener("click", () => {
  let webDesigns = products.filter((products) => products.sub === "WEB DESIGN");

  AddHtml.innerHTML = "";

  webDesigns.forEach((elm) => {
    AddHtml.innerHTML += `



    <div
          class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover"
        >
          <p class="text-[19px]">${elm.title}</p>
          <span class="text-[13px]">${elm.sub}</span>
        </div>
`;
  });
});

WebDevelopment.addEventListener("click", () => {
  let WebDevelopments = products.filter(
    (products) => products.sub === "WEB DEVELOPMENT"
  );

  AddHtml.innerHTML = "";

  WebDevelopments.forEach((elm) => {
    AddHtml.innerHTML += `



    <div
          class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover"
        >
          <p class="text-[19px]">${elm.title}</p>
          <span class="text-[13px]">${elm.sub}</span>
        </div>
`;
  });
});

AppDesign.addEventListener("click", () => {
  let AppDesigns = products.filter((products) => products.sub === "APP DESIGN");

  AddHtml.innerHTML = "";

  AppDesigns.forEach((elm) => {
    AddHtml.innerHTML += `



    <div
          class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover"
        >
          <p class="text-[19px]">${elm.title}</p>
          <span class="text-[13px]">${elm.sub}</span>
        </div>
`;
  });
});

AppDevelopment.addEventListener("click", () => {
  let AppDevelopments = products.filter(
    (products) => products.sub === "WEB DEVELOPMENT"
  );

  AddHtml.innerHTML = "";

  AppDevelopments.forEach((elm) => {
    AddHtml.innerHTML += `



    <div
          class="job-Section-1 w-[350px] h-[235px] bg-amber-300 flex flex-col justify-center items-center gap-[5px] bg-[url(${elm.img})] *:text-white bg-cover"
        >
          <p class="text-[19px]">${elm.title}</p>
          <span class="text-[13px]">${elm.sub}</span>
        </div>
`;
  });
});

console.log(AddHtml);
