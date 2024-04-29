const ctx = document.querySelector("#blackboard").getContext("2d");
const craie = document.querySelector(".craie");
const eponge = document.querySelector(".eponge");

const craie_box = document.querySelector(".craie_box");
const eponge_box = document.querySelector(".eponge_box");
const ctx2 = document.querySelector("#eponge_board").getContext("2d");

let craie_up = false;
let eponge_up = false;


class Eponge {
  constructor( x, y ){
    this.opacite = 0.50
    this.x = x;
    this.y = y;
  }
}

let liste_eponge = [];

const iterateur_eponge = () => {
  ctx2.clearRect(0,0,window.innerWidth, window.innerHeight);

  liste_eponge.forEach((eponge)=>{
    if (eponge.opacite > 0){
      eponge.opacite -= 0.014;
    }
      ctx2.beginPath();
      ctx2.fillStyle = "rgba(0,0,0,"+ eponge.opacite +")";
      ctx2.roundRect(eponge.x - 74, eponge.y - 125 , 150, 250, 20);

      ctx2.fill();
  })

  let empty = true;

  liste_eponge.forEach(( eponge )=>{
    if (eponge.opacite > 0){
      empty = false;
    }
  })

  if (empty === true){ liste_eponge = [];}

  requestAnimationFrame(iterateur_eponge);
}

let pos_craie = {
  x : undefined,
  y : undefined
};

const craie_draw = () => {
  ctx.globalCompositeOperation = 'source-over';

  ctx.beginPath();
  ctx.fillStyle = "rgb(248, 242, 240)";
  ctx.arc(pos_craie.x, pos_craie.y , 6, 0, 2 * Math.PI);
  ctx.fill();
}

const eponge_draw = () => {
  ctx.globalCompositeOperation = 'destination-out';

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.roundRect(pos_craie.x - 74, pos_craie.y - 125 , 150, 250, 20);
  ctx.fill();

  let the_eponge = new Eponge(pos_craie.x, pos_craie.y);
  liste_eponge.push(the_eponge);
}

const update_pos_craie = (e) => {
  craie.style.top = (e.clientY - (40 - (e.clientY/20)) ) + "px";
  craie.style.left = e.clientX + "px";
  craie.style.rotate = "-" + String(35 - (e.clientY/20)) + "deg";
}

const update_pos_eponge = (e) => {
  eponge.style.top = (e.clientY - 75  ) + "px";
  eponge.style.left = (e.clientX - 125) + "px";
  eponge.style.transform = "rotate(90deg)";
  // eponge.style.rotate = "-" + String(35 - (e.clientY/20)) + "deg";
}

const action_craie_up = () => {
  window.removeEventListener("mousemove", update_pos_craie);
  craie.style.setProperty('top', 'initial');
  craie.style.bottom = "1rem";
  craie.style.left = "1rem";
  craie.style.rotate = "0deg";
}

const action_eponge_up = () => {
  window.removeEventListener("mousemove", update_pos_eponge);
  eponge.style.setProperty('top', 'initial');
  eponge.style.bottom = "1rem";
  eponge.style.left = "12rem";
  eponge.style.transform = 'rotate(0deg)';
}

const action_craie_down = () => {
  window.addEventListener("mousemove", update_pos_craie)
}

const action_eponge_down = () => {
  window.addEventListener("mousemove", update_pos_eponge)
}


const action_craie = () => {
  craie_up === false ? action_craie_down() : action_craie_up();
  craie_up === false ? craie_up = true : craie_up = false;
}

const action_eponge = () => {
  eponge_up === false ? action_eponge_down() : action_eponge_up();
  eponge_up === false ? eponge_up = true : eponge_up = false;
}

craie_box.addEventListener("click", ()=>{action_craie()});

eponge_box.addEventListener("click", ()=>{action_eponge()});


const init = () => {
  window.requestAnimationFrame(draw);
}

const draw = () => {
  document.querySelector("#blackboard").width = window.innerWidth -20;
  document.querySelector("#blackboard").height = window.innerHeight -20;

  document.querySelector("#eponge_board").width = window.innerWidth -20;
  document.querySelector("#eponge_board").height = window.innerHeight -20;
}

init();

iterateur_eponge();

window.addEventListener("mousemove", (e)=>{
  if (e.buttons === 1 && craie_up === true){pos_craie.x = e.clientX; pos_craie.y = e.clientY; craie_draw();}
  else if(e.buttons === 1 && craie_up === false && eponge_up === true){pos_craie.x = e.clientX; pos_craie.y = e.clientY; eponge_draw();}
} )
