var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var planButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button'); 
var mobileNav =document.querySelector('.mobile-nav');

// backdrop.style.display ='block';
// console.dir(PlanButton);
for( var i =0; i < planButton.length; i++){
    planButton[i].addEventListener( 'click', function() {
            // modal.style.display= 'block';
            // backdrop.style.display = 'block';
            // modal.className ='open'; This will completely overwrite the  class lists
            modal.classList.add("open");
            backdrop.classList.add("open");
          });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
  }

function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
      }
      backdrop.classList.remove("open");

}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});
