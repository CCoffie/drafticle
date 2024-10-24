import * as React from "react";
import { useCanvasContext } from "../../canvas";
import { styled } from "baseui";
import ToolboxItems from "./ToolboxItems";
import { Scrollbars } from "react-custom-scrollbars";

const Container = styled("div", (props) => ({
  height: "56px",
  backgroundColor: props.$theme.colors.background,
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
  marginLeft: "1px",
  display: "flex",
}));
function EditorToolbox() {
  const { activeObject } = useCanvasContext();
  const Toolbox = activeObject ? ToolboxItems[activeObject.type] : null;
  return (
    <Container>
      <Scrollbars
        autoHide
        autoHeight
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        {Toolbox ? <Toolbox /> : <ToolboxItems.Default />}
      </Scrollbars>
    </Container>
  );
}

export default EditorToolbox;
