import { useContext } from 'react';
import { CanvasContext } from '../context';
export function useHandlers() {
    const { canvasManager } = useContext(CanvasContext);
    return canvasManager;
}