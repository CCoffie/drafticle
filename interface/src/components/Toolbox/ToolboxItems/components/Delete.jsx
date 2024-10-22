import * as React from "react";
import { useCanvasManager } from "../../../../canvas";
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import Icons from "../../../../components/icons";

function Delete() {
  const canvasManager = useCanvasManager();
  return (
    <Button
      onClick={() => canvasManager.delete()}
      size={SIZE.compact}
      kind={KIND.tertiary}
      shape={SHAPE.square}
    >
      <Icons.Delete size={24} />
    </Button>
  );
}

export default Delete;
