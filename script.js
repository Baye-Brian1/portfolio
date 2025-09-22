document.addEventListener('DOMContentLoaded', ()=>{
  const navLink= document.querySelector('nav');
const Bar= document.querySelector('.fa-bars');
const closeTag= document.querySelector('.fa-close');

const showNav = () =>{
  Bar.addEventListener('click', ()=>{
    navLink.style.display= 'block';
    closeTag.style.display= 'block';
    Bar.style.display= 'none';
  });
   closeTag.addEventListener('click', ()=>{
    navLink.style.display= 'none';
    closeTag.style.display= 'none';
    Bar.style.display= 'block';
  });
};
showNav();
});
