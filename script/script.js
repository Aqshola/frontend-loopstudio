const gallery_img = document.querySelectorAll(".gallery-img");

gallery_img.forEach((img) => {
  console.log(img.getAttribute("data-gallery-img"));
  img.style.background = `url("${img.getAttribute("data-gallery-img")}")`;
});
