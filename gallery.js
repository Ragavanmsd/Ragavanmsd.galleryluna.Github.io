const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const imgGallery=document.querySelectorAll('.gallery-img');

let currentlySelected=0;
prevBtn.addEventListener('click' , function(){
imgGallery[currentlySelected].classList.remove("active");
currentlySelected--;
imgGallery[currentlySelected].classList.add("active");
nextBtn.disabled=false;
if (currentlySelected===0){
    prevBtn.disabled=true
}
});
nextBtn.addEventListener('click' , function(){
imgGallery[currentlySelected].classList.remove("active");
currentlySelected++;
imgGallery[currentlySelected].classList.add("active");
prevBtn.disabled=false;
if (imgGallery.length=== currentlySelected+1){
    nextBtn.disabled=true;

}



}); 
