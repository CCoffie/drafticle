import * as React from "react";
import Icons from "../../components/icons";
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import { useActiveObject, useCanvasManager } from "../../canvas";
import { useEffect, useState } from "react";
import useAppContext from "../../hooks/useAppContext";

function UserLock(props) {
  const [value, setValue] = useState([1]);
  const activeObject = useActiveObject();
  const { adminRole, template, setTemplate } = useAppContext();
  const canvasManager = useCanvasManager();
  useEffect(() => {
    updateOptions(props.type === "element" ? activeObject : template);
  }, [activeObject, template]);

  useEffect(() => {
    if (canvasManager) {
      canvasManager.on("history:changed", () => {
        updateOptions(activeObject);
      });
    }
  }, [canvasManager]);

  const updateOptions = (object) => {
    if (!object) object = {};
    const updatedValue = (object.ui || {})[props.action];
    setValue(updatedValue);
  };

  const updateLock = () => {
    if (props.type === "element") {
      let lock = (activeObject.ui || {})[props.action] ? false : true;
      let ui = { ...activeObject.ui, [props.action]: lock };
      canvasManager.update({ ui: ui });
    }
    if (props.type === "template" && template) {
      let lock = (template.ui || {})[props.action] ? false : true;
      template.ui = { ...template.ui, [props.action]: lock };
      setTemplate(Object.assign({}, template));
      updateOptions(template);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        marginLeft:
          props.type === "element" && (!value || adminRole) ? "5px" : "inherit",
        marginRight:
          props.type === "element" && (!value || adminRole) ? "5px" : "inherit",
      }}
    >
      {props && ((!value && !props.admin) || adminRole) && props.slot}
      {adminRole ? (
        <div
          style={{
            position: "absolute",
            overflow: "hidden",
            top: -8,
            right: -8,
            zIndex: 100,
          }}
        >
          <Button
            onClick={updateLock}
            size={SIZE.mini}
            kind={KIND.BaseButton}
            shape={SHAPE.circle}
            overrides={{
              BaseButton: {
                style: () => ({
                  width: "22px",
                  height: "22px",
                }),
              },
            }}
          >
            {value ? <Icons.Locked size={16} /> : <Icons.UnLocked size={16} />}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default UserLock;
