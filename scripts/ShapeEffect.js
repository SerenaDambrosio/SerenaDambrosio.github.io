import { animate} from './anime.esm.js';


let ShapesContainer = document.getElementById("shapes-container");


let rect = ShapesContainer.getBoundingClientRect();

let screen_w = rect.width;
let screen_h = rect.height;

console.log(screen_w);
console.log(screen_h);

animate(
  '#shape-svg',
  {
    translateX: [0,rect.width-200,rect.width-200 ,0         ,0],
    translateY: [0,0         ,screen_h  -100 ,screen_h - 100 ,0],
    scale : [1,2,1.2,1.5,1],
    //scale: 1.2,
     loop:true,
     duration:16000,
});

 animate(
  '#triangle-svg',
  {
    translateX: [0,rect.width-100,rect.width-100 ,0         ,0],
    translateY: [0,0         ,screen_h  -100 ,screen_h - 100 ,0],
    //scale: 1.2,
    loop:true,
    scale : [1,2,1.2,1.5,1],
    duration:16000,
    delay:4000,
 
});

animate(
  '#rectangle-svg',
  {
    translateX: [0,rect.width-100,rect.width-100 ,0         ,0],
    translateY: [0,0         ,screen_h  -100 ,screen_h - 100 ,0],
    //scale: 1.2,
    loop:true,
    scale : [1,2,1.2,1.5,1],
    duration:16000,
    delay: 6000,
}); 

animate(
  '#ellipse-svg',
  {
    translateX: [0,rect.width-100,rect.width-100 ,0         ,0],
    translateY: [0,0         ,screen_h  -100 ,screen_h - 100 ,0],
    //scale: 1.2,
    loop:true,
    scale : [1,2,1.2,1.5,1],
    duration:16000,
    delay: 8000,
}); 