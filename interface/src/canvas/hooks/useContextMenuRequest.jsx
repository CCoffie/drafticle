import { useContext } from 'react';
import { CanvasContext } from '../context';
export function useContextMenuRequest() {
    const { contextMenuRequest } = useContext(CanvasContext);
    return contextMenuRequest;
}