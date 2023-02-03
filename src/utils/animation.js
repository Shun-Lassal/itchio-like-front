import anime from "animejs";

const rotateL = (target) => {
  console.log("rotate");

  anime({
    targets: target,
    rotate: "-10deg",
    scaleX: "2",
    borderRadius: ["0%", "50%"],
  });
};

const rotateR = (target) => {
  console.log("rotate");

  anime({
    targets: target,
    rotate: "0deg",
    scaleX: "1",
    borderRadius: ["50%", "0%"],
  });
};

export default {
  rotateL,
  rotateR,
};
