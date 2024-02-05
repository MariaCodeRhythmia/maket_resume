/*if(document.body.offsetWidth < 785){
  console.log(document.body.offsetWidth);
}*/
const iconMenu = document.querySelector('.menuIcon');

if (iconMenu) {

  const textMenu = document.querySelector('.textMenu');

  iconMenu.addEventListener("click", function(e){
    iconMenu.classList.toggle('activ');
    textMenu.classList.toggle('activ');
    document.body.classList.toggle('lock');
  });

}

/*iconMenu.addEventListener("mouseover", function(e){
    iconMenu.classList.toggle('mOver');
});

iconMenu.addEventListener("mouseout", function(e){
    iconMenu.classList.remove('mOver');
});*/
