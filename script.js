const ctx = document.querySelector("#blackboard").getContext("2d");

let width_blackboard = window.innerWidth;
let height_blackboard = window.innerHeight;

const init = () => {
  window.requestAnimationFrame(draw);
}

const draw = () => {
  document.querySelector("#blackboard").style.width = window.innerWidth + "px";
  document.querySelector("#blackboard").style.height = window.innerHeight + "px";

  ctx.clearRect(0, 0, width_blackboard, height_blackboard);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width_blackboard, height_blackboard);
  // window.requestAnimationFrame(draw);
}

init();
