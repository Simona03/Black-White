const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragline = document.querySelector(".slider .drag-line");
slider.oninput = ()=>{  //наследяване
    let sliderVal = slider.value;
    dragline.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}