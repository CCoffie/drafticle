import * as React from "react";
import Icons from "../../../../components/icons";
import { Button, KIND, SIZE } from "baseui/button";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { useCanvasManager } from "../../../../canvas";

function Position() {
  const canvasManager = useCanvasManager();
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
              width: "360px",
              background: "#ffffff",
              fontFamily: "system-ui",
              fontSize: "0.875rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              padding: "1.5rem",
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
                onClick={() => canvasManager.bringForward()}
              >
                <Icons.Forward size={24} />
                Forward
              </Button>
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => canvasManager.bringToFront()}
              >
                <Icons.ToFront size={24} />
                ToFront
              </Button>
            </div>
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
                onClick={() => canvasManager.sendBackwards()}
              >
                <Icons.Backward size={24} />
                Backward
              </Button>
              <Button
                size={SIZE.compact}
                kind={KIND.tertiary}
                onClick={() => canvasManager.sendToBack()}
              >
                <Icons.ToBack size={24} />
                ToBack
              </Button>
            </div>
          </div>
        </div>
      )}
    >
      <Button size={SIZE.compact} kind={KIND.tertiary}>
        Position
      </Button>
    </StatefulPopover>
  );
}

export default Position;
