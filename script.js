const ctx = document.querySelector("#blackboard").getContext("2d");
const craie = document.querySelector(".craie");
const craie_box = document.querySelector(".craie_box");

let craie_up = false;

const update_pos_craie = (e) => {
  craie.style.top = (e.clientY - 25) + "px";
  craie.style.left = e.clientX + "px";
  craie.style.rotate = "-20deg";
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

  const gradient = ctx.createRadialGradient((window.innerWidth -20)/2, (window.innerHeight -20)/2, 0, (window.innerWidth -20)/2, (window.innerHeight -20)/2, (window.innerWidth -20));
  gradient.addColorStop(0, "rgba(0,0,0,0.86)");
  gradient.addColorStop(1, "black");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth -20, window.innerHeight -20);
  // window.requestAnimationFrame(draw);
}

init();
