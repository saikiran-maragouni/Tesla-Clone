// document.lastScrollPosition=0;
// document.lastCentered=0
// document.onWayTO=null;
// document.addEventListener('scroll',function(){
//   const direction = window.pageYOffset - document.lastScrollPosition>0 ? 'down' : 'up';
//   const sections = [...document.querySelectorAll("section")];
//
// if(document.onWayTO===null){
//   cost destIndex=direction==='up'? document.lastCentered-1:document.lastCentered+1;
//   if(destIndex>=0 && destIndex< sections.length){
//     document.onWayTO=destIndex;
//     window.scroll(0,sections[destIndex].offsetTop);
//   }
// }
//   sections.forEach((section,index)=>{
//     if window.pageYOffset===section.offsetTop){
//       document.lastCentered=index;
//       section.classList.remove("active");
//       section.classList.add("active");
//       if(document.onWayTO===index){
//         document.onWayTO=null;
//       }
//     }
//     else{
//       section.classList.remove("active");
//     }
//   })
//
//
//   document.lastScrollPosition=widow.pageYOffset;
// });




document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  if (document.onWayTo === null) {
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
      console.log({destIndex,direction});
      document.onWayTo = destIndex;
      window.scroll(0, sections[destIndex].offsetTop);
    }
  }


  sections.forEach((section,index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
      section.classList.add("active");
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    } else {
      section.classList.remove("active");
    }
  })

  document.lastScrollPosition = window.pageYOffset;
})
