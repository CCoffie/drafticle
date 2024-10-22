import React from 'react';
import { createContext, useState } from 'react';
export const CanvasContext = createContext({
    canvas: null,
    setCanvas: () => { },
    activeObject: null,
    setActiveObject: () => { },
    canvasManager: null,
    setCanvasManager: () => { },
    zoomRatio: 1,
    setZoomRatio: () => { },
    contextMenuRequest: null,
    setContextMenuRequest: () => { }
});
export const EditorProvider = ({ children }) => {
    const [canvas, setCanvas] = useState(null);
    const [activeObject, setActiveObject] = useState(null);
    const [canvasManager, setCanvasManager] = useState(null);
    const [zoomRatio, setZoomRatio] = useState(1);
    const [contextMenuRequest, setContextMenuRequest] = useState(null);
    const context = {
        canvas,
        setCanvas,
        activeObject,
        setActiveObject,
        canvasManager,
        setCanvasManager,
        zoomRatio,
        setZoomRatio,
        contextMenuRequest,
        setContextMenuRequest
    };
    return React.createElement(CanvasContext.Provider, { value: context }, children);
};