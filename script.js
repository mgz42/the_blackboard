const ctx = document.querySelector("#blackboard").getContext("2d");
const craie = document.querySelector(".craie");
const craie_box = document.querySelector(".craie_box");

let craie_up = false;

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

  // window.requestAnimationFrame(craie_draw);

}

const eponge_draw = () => {
  ctx.globalCompositeOperation = 'destination-out';

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(pos_craie.x, pos_craie.y , 24, 0, 2 * Math.PI);
  ctx.fill();

  // window.requestAnimationFrame(eponge_draw);

}

const update_pos_craie = (e) => {
  craie.style.top = (e.clientY - (40 - (e.clientY/20)) ) + "px";
  craie.style.left = e.clientX + "px";
  craie.style.rotate = "-" + String(35 - (e.clientY/20)) + "deg";
}

const action_craie_up = () => {
  window.removeEventListener("mousemove", update_pos_craie);
  craie.style.setProperty('top', 'initial');
  craie.style.bottom = "1rem";
  craie.style.left = "1rem";
  craie.style.rotate = "0deg";
}

const action_craie_down = () => {
  window.addEventListener("mousemove", update_pos_craie)
}


const action_craie = () => {
  craie_up === false ? action_craie_down() : action_craie_up();
  craie_up === false ? craie_up = true : craie_up = false;
}

craie_box.addEventListener("click", ()=>{action_craie()});

const init = () => {
  window.requestAnimationFrame(draw);
}

const draw = () => {
  document.querySelector("#blackboard").width = window.innerWidth -20;
  document.querySelector("#blackboard").height = window.innerHeight -20;

  // const gradient = ctx.createRadialGradient((window.innerWidth -20)/2, (window.innerHeight -20)/2, 0, (window.innerWidth -20)/2, (window.innerHeight -20)/2, (window.innerWidth -20));
  // gradient.addColorStop(0, "rgba(0,0,0,0.86)");
  // gradient.addColorStop(1, "black");

  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, 0, window.innerWidth -20, window.innerHeight -20);
}

init();
window.addEventListener("mousemove", (e)=>{console.log(e)
  if (e.buttons === 1 && craie_up === true){pos_craie.x = e.clientX; pos_craie.y = e.clientY; craie_draw();}
  else if(e.buttons === 1 && craie_up === false){pos_craie.x = e.clientX; pos_craie.y = e.clientY; eponge_draw();}
} )
