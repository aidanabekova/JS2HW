let positionX = 0;
let positionY = 0;
const block = document.querySelector(".block");

const move = () => {
  if (positionX <= 360 && positionY === 0) {
    positionX += 1;
    block.style.left = `${positionX}px`;
    setTimeout(move, 0.2);
  } else if (positionX >= 360 && positionY <= 360) {
    positionY += 1;
    block.style.top = `${positionY}px`;
    setTimeout(move, 0.2);
  } else if (positionY >= 360 && positionX !== 0) {
    positionX -= 1;
    block.style.left = `${positionX}px`;
    setTimeout(move, 0.2);
  } else if (positionX === 0 && positionY !== 0) {
    positionY -= 1;
    block.style.top = `${positionY}px`;
    setTimeout(move, 0.2);
  }
};

move();
