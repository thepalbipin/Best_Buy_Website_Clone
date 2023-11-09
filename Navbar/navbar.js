const burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click",function(){
    const isExpanded = burgerElement.getAttribute('area-expanded') === 'true';
    burgerElement.setAttribute('area-expanded', !isExpanded);
    // alert("Clicked");
});