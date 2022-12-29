const ball = (startPosition: number[], ctx: CanvasRenderingContext2D) => {
  const [x, y] = startPosition;

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  return null;
}

export default ball;