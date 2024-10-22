import { useContext } from 'react';
import { CanvasContext } from '../context';
export function useActiveObject() {
    const { activeObject } = useContext(CanvasContext);
    return activeObject;
}