import { useContext } from 'react';
import { CanvasContext } from '../context';
export function useCanvasManager() {
    const { canvasManager } = useContext(CanvasContext);
    return canvasManager;
}