
// pour le drag & drop sur desktop
  const ultras = document.querySelectorAll('.ultra__img')

  let currentItem, currentZone

  document.addEventListener('dragstart', e => {
    currentItem = e.target
  })

  document.addEventListener('dragleave', e => {
    if(e.target.className === 'btn' && e.target.parentElement.children[2] === undefined) {
      e.target.parentElement.append(currentItem)
    }
  })

  window.addEventListener('touchmove', e => {
    Array.from(e.touches).forEach((finger, i) => {
     document.querySelector (`svg:nth-child(${i + 1})`).style.setProperty('--x', finger.clientX + 'px');

      document.querySelector (`svg:nth-child(${i + 1})`).style.setProperty('--y', finger.clientY + 'px');
    });
  });


// pour afficher le btn APRES le drag and drop
const result = document.querySelector('.resultat');
let caseDone = 0
document.addEventListener('dragend', e => {
  caseDone += 1
  if (caseDone === 12) {
    result.classList.add('resultat--appear');
  }
  // console.log(caseDone)
})

// on entend un applaudissement au button
var press = document.getElementById("go");
var sound = document.getElementById("applause");
press.addEventListener("click", function(){
 if(sound.paused){
   sound.play();
   press.addEventListener('click', function(){
   });
 }
});

// pour voir le resultat des couleurs

const btn = document.querySelector('.resultat');
const syn = document.querySelector('.grid--syn');
const ongrid = document.querySelector('.grid__on');

const un = document.querySelector('.une');
const deu = document.querySelector('.deux');
const tre = document.querySelector('.trois');
const qua = document.querySelector('.quatre');
const ci = document.querySelector('.cinq');
const si = document.querySelector('.six');
const se = document.querySelector('.sept');
const hui = document.querySelector('.huit');
const neu = document.querySelector('.neuf');
const ix = document.querySelector('.dix');
const ze = document.querySelector('.onze');
const dou = document.querySelector('.douze');

btn.addEventListener('click', function(){

   un.classList.add('ultra__img--blanc');
   deu.classList.add('ultra__img--jaune');
   tre.classList.add('ultra__img--orange');
   qua.classList.add('ultra__img--vert');
   ci.classList.add('ultra__img--bleu');
   si.classList.add('ultra__img--brun');
   se.classList.add('ultra__img--rose');
   hui.classList.add('ultra__img--violet');
   neu.classList.add('ultra__img--gris');
   ix.classList.add('ultra__img--noir');
   ze.classList.add('ultra__img--rouge');
   dou.classList.add('ultra__img--indigo');
   syn.classList.add('grid--left');
   ongrid.classList.add('grid__on--display');
   btn.classList.add('resultat--disappear');
});
