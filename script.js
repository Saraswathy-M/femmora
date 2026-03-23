let interval = setInterval(autoScroll,20);

slider.addEventListener("mouseover", ()=> clearInterval(interval));
slider.addEventListener("mouseout", ()=> {
 interval = setInterval(autoScroll,20);
});
