const restaurant01 = document.querySelector("#restaurant01");
const ssHyderabadBiryani = document.querySelector("#ssHyderabadBiryani");
const header02 = document.querySelector("#header02");

restaurant01.addEventListener("click", function(){
    ssHyderabadBiryani.style.display = "flex";
    restaurant01.style.display = "none";
})
