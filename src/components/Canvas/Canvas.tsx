
import { useEffect, useMemo, useRef } from "react";
import useWindowResize from "../../hooks/useWindowResize";
import ball from "../Ball";
import "./Canvas.scss";


const Canvas = () => {
  const [width, height] = useWindowResize();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startBallPosition = useMemo(
    () => [Math.random() * (60 + width), Math.random() * ((height/2 + 20) - (height/2 - 20)) + height/2 - 20],
    [height, width]
  );

  useEffect(() => {
    if(!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext("2d");

    if(ctx) {
      ball(startBallPosition, ctx);
    }

  }, [startBallPosition]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      id="canvas"
    ></canvas>
  )
}

export default Canvas;