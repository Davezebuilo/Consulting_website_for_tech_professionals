
// linking the profile cards in the landing page to the profile page
// const outterMost = document.querySelector(".pro-profiles"),
// carousel = outterMost.querySelector(".profiles-carousel"),
// card = carousel.querySelector(".profile-card");

// card.addEventListener("click", function(){
//     window.location.href = "./professinals-profile.html"
// });

const outterMost = document.querySelector(".pro-profiles");

outterMost.addEventListener("click", function(event){
    if (event.target.matches(".profile-card")){
        window.location.href = "./professinals-profile.html";
    }
});