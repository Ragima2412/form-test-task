import React, { useEffect } from 'react';
import '../Spoiler/Spoiler.css';

const Spoiler = () => {

    // let btnItems = document.querySelectorAll('.btn-item');
    // console.log(btnItems.length)
      
    // for(let i = 0; i < btnItems.length; i ++) {
      
    //   btnItems[i].addEventListener('click',  (e) => {
    //       let btn = e.target;
    //         console.log(btn.className === 'btn-item active');
    //       if(!btn.className === "btn-item active") {
    //           // btn.classList.remove('active')
    //           removeClass()
    //       } else {          
    //           removeClass()
    //           btn.classList.add('active');
    //       }
    //       console.log(btnItems);
    //   })
    // }
    // function removeClass() {
    //   for(let i = 0; i < btnItems.length; i ++) { 
    //       btnItems[i].classList.remove('active')
    //   }
    // }

useEffect(() => {
    let btnItems = document.querySelectorAll('.btn-item');
    console.log(btnItems.length)
      
    for(let i = 0; i < btnItems.length; i ++) {
      
      btnItems[i].addEventListener('click',  (e) => {
          let btn = e.target;
            console.log(btn.className === 'btn-item active');
          if(!btn.className === "btn-item active") {
              // btn.classList.remove('active')
              removeClass()
          } else {          
              removeClass()
              btn.classList.add('active');
          }
          console.log(btnItems);
      })
    }
    function removeClass() {
      for(let i = 0; i < btnItems.length; i ++) { 
          btnItems[i].classList.remove('active')
      }
    }
    window.addEventListener('resize', (e) => {
      let container = document.querySelector('.main-container');
   if(window.innerWidth < 850) {
    container.classList.add('orange')
   console.log(container)
   } else {
    container.classList.remove('orange')
   }
  })
})
  





    return (
      <div className='main-container'>
        <div className='list-container'>
            <div className='item'>
                <p className='btn-item '>Text1</p>
                <div className='item-content'>
                    fdhfdjfhdjf fjkjkjkjkjkjv lllllllllllllllll 
                    llllllllllllllllllll llllllllllllllllllllll 
                </div>
            </div>
            <div className='item'>
                <p className='btn-item'>Text2</p>
                <div className='item-content'>
                    fdhfdjfhdjf fjkjkjkjkjkjv lllllllllllllllll
                     llllllllllllllllllll llllllllllllllllllllll 
                </div>
            </div>
            <div className='item'>
                <p className='btn-item'>Text3</p>
                <div className='item-content'>
                    fdhfdjfhdjf fjkjkjkjkjkjv lllllllllllllllll llllllllllllllllllll llllllllllllllllllllll 
                </div>
            </div>
        </div>
      </div>
            )
        }
        
        export default Spoiler;





//Spollers

// const spollersArray = document.querySelectorAll('[data-spollers]');

// if (spollersArray.length > 0) {

//     const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//         return !item.dataset.spollers.split(",")[0];
//     });

//     if (spollersRegular.length > 0) {
//         initSpollers(spollersRegular);
//     };
//     const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//         return item.dataset.spollers.split(",")[0];
//     });

//     // Media query Spollers Initialisation

//     if (spollersMedia.length > 0) {
//         const breakPointArray = [];
//         spollersMedia.forEach(item => {
//             const params = item.dataset.spollers;
//             const breakpoint = {};
//             const paramsArray = params.split(",");
//             breakpoint.value = paramsArray[0];
//             breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
//             breakpoint.item = item;
//             breakPointArray.push(breakpoint);
//         });

//         //Get unique breakpoints
//         let mediaQueries = breakPointArray.map(function (item) {
//             return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
//         });

//         mediaQueries = mediaQueries.filter(function (item, index, self) {
//             return self.indexOf(item) === index;
//         });

//         //Working with each breakpoints
//         mediaQueries.forEach(breakpoint => {
//             const paramsArray = breakpoint.split(',');
//             const mediaBreakpoint = paramsArray[1];
//             const mediaType = paramsArray[2];
//             const matchMedia = window.matchMedia(paramsArray[0]);
//             //Objects with necessary conditions

//             const spollersArray = breakPointArray.filter(function (item) {
//                 if (item.value === mediaBreakpoint && item.type === mediaType) {
//                     return true;
//                 }
//             });

//             matchMedia.addEventListener('change', () => {
//                 initSpollers(spollersArray, matchMedia);
//             });

//             matchMedia.addEventListener(function () {
//                 initSpollers(spollersArray, matchMedia);
//             });
//             initSpollers(spollersArray, matchMedia);
//         });
//     }

//     function initSpollers(spollersArray, matchMedia = false) {
//         spollersArray.forEach(spollersBlock => {
//             spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//             if (matchMedia.matches || !matchMedia) {
//                 spollersBlock.classList.add('_init');
//                 initSpollerBody(spollersBlock);
//                 spollersBlock.addEventListener("click", setSpollerAction);
//             } else {
//                 spollersBlock.classList.remove('_init');
//                 initSpollerBody(spollersBlock, false);
//                 spollersBlock.removeEventListener("click", setSpollerAction);
//             }
//         })
//     }

//     function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//         if (spollerTitles.length > 0) {
//             spollerTitles.forEach(spollerTitle => {
//                 if (hideSpollerBody) {
//                     spollerTitle.removeAttribute('tabindex');
//                     if (!spollerTitle.classList.contains('_active')) {
//                         spollerTitle.nextElementSibling.hidden = true;
//                     }
//                 } else {
//                     spollerTitle.setAttribute('tabindex', '-1');
//                     spollerTitle.nextElementSibling.hidden = false;
//                 }
//             })
//         }
//     }

//     function setSpollerAction(e) {
//         const el = e.target;
//         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//             const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//             const spollersBlock = spollerTitle.closest('[data-spollers]');
//             const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

//             if (!spollersBlock.querySelectorAll('._slide').length) {
//                 if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//                     hideSpollerBody(spollersBlock);
//                 }
//                 spollerTitle.classList.toggle('_active');
//                 _slideToggle(spollerTitle.nextElementSibling, 500);
//             }
//             e.preventDefault();
//         }
//     };

//     function hideSpollerBody(spollersBlock) {
//         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//         if (spollerActiveTitle) {
//             spollerActiveTitle.classList.remove('_active');
//             _slideUp(spollerActiveTitle.nextElementSibling, 500);
//         }
//     }
// }


// let _slideUp = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         target.style.transitionProperty = 'height, margin, padding';
//         target.style.transitionDuration = duration + 'ms';
//         target.style.height = target.offsetHeight + 'px';
//         target.offsetHeight();
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         window.setTimeout(() => {
//             target.hidden = true;
//             target.style.removeProperty('height');
//             target.style.removeProperty('padding-top');
//             target.style.removeProperty('padding-bottom');

//             target.style.removeProperty('margin-top');
//             target.style.removeProperty('margin-bottom');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration)
//     }
// }

// let _slideDown = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         if (target.hidden) {
//             target.hidden = false;
//         }
//         let height = target.offsetHeight;
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         target.offsetHeight();
//         target.style.transitionProperty = "height, margin, padding";
//         target.style.transitionDuration = duration + 'ms';
//         target.style.height = height + 'px';

//         target.style.removeProperty('padding-top');
//         target.style.removeProperty('padding-bottom');

//         target.style.removeProperty('margin-top');
//         target.style.removeProperty('margin-bottom');

//         window.setTimeout(() => {
//             target.style.removeProperty('height');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration)
//     }
// }

// let _slideToggle = (target, duration = 500) => {
//     if (target.hidden) {
//         return _slideDown(target, duration);
//     } else {
//         return _slideUp(target, duration);
//     }
// }