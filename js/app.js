const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    document.querySelector("header .material-icons").innerHTML = "close";
  } else {
    document.querySelector("header .material-icons").innerHTML = "menu";
  }
};

let allPhoto = [...document.getElementsByClassName("grid")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid");
  let clickedImgName = gridItemClicked.id;
  let clickedImgNameLink = gridItemClicked.getAttribute("data-link");
  popupBg.classList.add("active");
  console.log(clickedImgName);
  popupImg.src = `img/${clickedImgName}.png`;
  popupBg.scrollIntoView({ behavior: "smooth" });
  document.getElementById("gitUrl").href = clickedImgNameLink;

  // let h3contain = e.target.closest(".wh100");
  // console.log(h3contain)
  // let clickedH3contain = h3contain.id;
  // console.log(clickedH3contain)
};

const closePopup = () =>{
  popupBg.classList.remove("active")
}

allPhoto.forEach((el) => el.addEventListener("click", openPopup));
popupImg.addEventListener("click", (e) => e.stopPropagation())
popupBg.addEventListener("click", closePopup)
