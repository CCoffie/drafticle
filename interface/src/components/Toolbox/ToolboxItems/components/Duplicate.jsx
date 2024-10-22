import * as React from "react";
import { useCanvasManager } from "../../../../canvas";
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import Icons from "../../../../components/icons";

function Duplicate() {
  const canvasManager = useCanvasManager();
  return (
    <Button
      onClick={() => {
        canvasManager.clone();
      }}
      size={SIZE.compact}
      kind={KIND.tertiary}
      shape={SHAPE.square}
    >
      <Icons.Duplicate size={24} />
    </Button>
  );
}

export default Duplicate;
