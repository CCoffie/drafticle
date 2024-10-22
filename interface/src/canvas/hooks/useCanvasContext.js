import { useContext } from 'react';
import { CanvasContext } from '../context';
export function useCanvasContext() {
    const { setCanvas, canvas, activeObject, setActiveObject, zoomRatio } = useContext(CanvasContext);
    return {
        setCanvas,
        canvas,
        activeObject,
        setActiveObject,
        zoomRatio
    };
}