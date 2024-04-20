const ctx = document.querySelector("#blackboard").getContext("2d");
const craie = document.querySelector(".craie");

const update_pos_craie = (e) => {
  // console.log(craie);
  craie.style.top = (e.clientY - 25) + "px";
  craie.style.left = e.clientX + "px";
  craie.style.rotate = "-20deg";
}

const action_craie = () => {
  window.addEventListener("mousemove", (e)=>{update_pos_craie(e)});
}

craie.addEventListener("click", ()=>{action_craie();});

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
