import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { useActiveObject, useCanvasManager } from "../../../../canvas";
import { useEffect, useState } from "react";
const defaultOptions = {
  lockEditing: false,
  lockMovement: false,
  lockResize: false,
  lockRotation: false,
};
function Lock() {
  const canvasManager = useCanvasManager();
  const activeObject = useActiveObject();
  const [options, setOptions] = useState(defaultOptions);
  useEffect(() => {
    updateOptions(activeObject);
  }, [activeObject]);

  useEffect(() => {
    canvasManager.on("history:changed", () => {
      updateOptions(activeObject);
    });
  }, [canvasManager]);

  const updateOptions = (object) => {
    setOptions({
      lockEditing: object.lockEditing,
      lockMovement: object.lockMovementX,
      lockResize: object.lockScalingX,
      lockRotation: object.lockRotation,
    });
  };
  const toggleLockEditing = () => {
    const currentValue = options.lockEditing;
    canvasManager.update({
      lockEditing: !currentValue,
    });
  };
  const toggleLockMovement = () => {
    const currentValue = options.lockMovement;
    canvasManager.update({
      lockMovementX: !currentValue,
      lockMovementY: !currentValue,
    });
  };
  const toggleLockResize = () => {
    const currentValue = options.lockResize;
    canvasManager.update({
      lockScalingX: !currentValue,
      lockScalingY: !currentValue,
    });
  };
  const toggleLockRotation = () => {
    const currentValue = options.lockRotation;
    canvasManager.update({
      lockRotation: !currentValue,
    });
  };
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottom}
      overrides={{
        Body: {
          style: () => ({
            top: "56px",
          }),
        },
      }}
      content={() => (
        <div>
          <div
            style={{
              width: "180px",
              background: "#ffffff",
              fontFamily: "system-ui",
              fontSize: "0.875rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => toggleLockEditing()}
              >
                {options.lockEditing ? "Unlock " : "Lock "}
                Editing
              </Button>
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => toggleLockMovement()}
              >
                {options.lockMovement ? "Unlock " : "Lock "}
                Movement
              </Button>
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => toggleLockResize()}
              >
                {options.lockResize ? "Unlock " : "Lock "}
                Resize
              </Button>
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => toggleLockRotation()}
              >
                {options.lockRotation ? "Unlock " : "Lock "}
                Rotation
              </Button>
            </div>
          </div>
        </div>
      )}
    >
      <Button size={SIZE.compact} kind={KIND.tertiary}>
        Lock
      </Button>
    </StatefulPopover>
  );
}

export default Lock;
