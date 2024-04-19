const ctx = document.querySelector("#blackboard").getContext("2d");

const init = () => {
  window.requestAnimationFrame(draw);
}

const draw = () => {
  document.querySelector("#blackboard").width = window.innerWidth -20;
  document.querySelector("#blackboard").height = window.innerHeight -20;

  const gradient = ctx.createRadialGradient((window.innerWidth -20)/2, (window.innerHeight -20)/2, 0, (window.innerWidth -20)/2, (window.innerHeight -20)/2, (window.innerWidth -20));
  gradient.addColorStop(0, "rgba(0,0,0,0.9)");
  gradient.addColorStop(1, "black");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth -20, window.innerHeight -20);
  // window.requestAnimationFrame(draw);
}

init();
