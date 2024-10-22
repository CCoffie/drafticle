// @ts-nocheck
import * as React from "react";
import Icons from "../../../../components/icons";
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { styled, ThemeProvider, LightTheme } from "baseui";
import { Input } from "baseui/input";
import { useActiveObject, useCanvasManager } from "../../../../canvas";
import { useEffect, useState } from "react";

const Container = styled("div", (props) => ({
  background: props.$theme.colors.background,
  color: props.$theme.colors.primary,
  width: "160px",
  fontFamily: "Uber Move Text",
  padding: "2rem 2rem",
}));
function AutoResize() {
  const [value, setValue] = useState([1]);
  const activeObject = useActiveObject();
  const canvasManager = useCanvasManager();
  useEffect(() => {
    updateOptions(activeObject);
  }, [activeObject]);

  useEffect(() => {
    canvasManager.on("history:changed", () => {
      updateOptions(activeObject);
    });
  }, [canvasManager]);

  const updateOptions = (object) => {
    setValue(object.autoResize);
  };

  const updateOpacity = (value) => {
    canvasManager.update({ autoResize: isNaN(parseInt(value)) ? 0 : parseInt(value) });
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
        <ThemeProvider theme={LightTheme}>
          <Container>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>Auto Resize</div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Input
                  value={value}
                  onChange={(e) => updateOpacity(e.target.value)}
                  placeholder="auto resize"
                />
              </div>
            </div>
          </Container>
        </ThemeProvider>
      )}
    >
      <Button size={SIZE.compact} kind={KIND.tertiary} shape={SHAPE.square}>
        <Icons.AutoResize size={24} />
      </Button>
    </StatefulPopover>
  );
}

export default AutoResize;
