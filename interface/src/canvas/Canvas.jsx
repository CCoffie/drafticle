import { fabric } from "fabric";
import React, { useContext, useEffect, useRef } from "react";
import { CanvasContext } from "./context";
import CanvasManager from "./CanvasManager";
import "./objects";
function Canvas() {
  const containerRef = useRef(null);
  const context = useContext(CanvasContext);
  const { setCanvasManager } = context;
  useEffect(() => {
    const container = containerRef.current;
    const { clientHeight, clientWidth } = container;
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: "#f6f7f9",
      height: clientHeight,
      width: clientWidth,
      preserveObjectStacking: true,
      fireMiddleClick: true,
      fireRightClick: true,
    });
    const canvasManager = new CanvasManager({
      canvas: canvas,
      context: context,
    });
    setCanvasManager(canvasManager);
    context.setCanvas(canvas);
    const resizeObserver = new ResizeObserver((entries) => {
      const { width = clientWidth, height = clientHeight } =
        (entries[0] && entries[0].contentRect) || {};
      canvasManager.canvas.resize(width, height);
    });
    resizeObserver.observe(container);
    return () => {
      canvasManager.destroy();
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, []);
  return React.createElement(
    "div",
    {
      id: "editor-container",
      ref: containerRef,
      style: { flex: 1, position: "relative", overflow: "hidden" },
    },
    React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          height: "100%",
          width: "100%",
        },
      },
      React.createElement("canvas", { id: "canvas" })
    )
  );
}
export default Canvas;
