// for the top rated professionals on the profess page
const outterMostProfess = document.querySelector(".pro-profile");

outterMostProfess.addEventListener("click", function(event){
    if (event.target.matches(".profile-card")){
        window.location.href = "./professinals-profile.html";
    }
});

// for the category of users
const outterMostmembs = document.querySelector(".data-eng");
const innie = outterMostmembs.querySelector(".allcap");
const Housing = innie.querySelector(".profiles-carousels")

Housing.addEventListener("click", function(event){
    if (event.target.matches(".profile-card")){
        window.location.href = "./professinals-profile.html";
    }
});