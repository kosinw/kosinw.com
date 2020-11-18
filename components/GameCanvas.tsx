/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useRef } from "react";

const GameCanvas: React.FC<{}> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
  }, []);

  return (
    <canvas
      id="main_game"
      ref={canvasRef}
      sx={{
        width: "100%",
        height: 500,
        border: "1px solid",
        borderColor: "text",
      }}
    ></canvas>
  );
};

export default GameCanvas;
