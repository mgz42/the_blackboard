const ctx = document.querySelector("#blackboard").getContext("2d");

const init = () => {
  window.requestAnimationFrame(draw);
}

const draw = () => {
  ctx.clearRect(0, 0, 1200, 900);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1200, 900);


  // window.requestAnimationFrame(draw);
}
