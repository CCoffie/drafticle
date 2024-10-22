import * as React from "react";
import Icons from "../../../components/icons";
import Page from "./components/Page";
import { Button, SHAPE, KIND, SIZE } from "baseui/button";
import { Plus, CheckIndeterminate } from "baseui/icon";
import { styled, ThemeProvider, LightTheme } from "baseui";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import useAppContext from "../../../hooks/useAppContext";
import { PanelType } from "../../../constants/app-options";
function Default() {
  const {
    setActivePanel,
    isMobile,
    template,
    setTemplate,
    activePage,
    setActivePage,
    adminRole,
  } = useAppContext();
  let addPage = () => {
    const newPage = {
      name: "New Page",
      id: (Math.random() + 1).toString(36).substring(7),
      objects: [],
      background: "#ffffff",
      size: {
        width: 1280,
        height: 720,
      },
      preview: "",
    };
    template.pages.push(newPage);
    setTemplate(Object.assign({}, template));
    // init page
    setActivePage({ index: template.pages.length - 1 });
  };
  let removePage = () => {
    if (confirm("Are you sure to delete this page ?") == true) {
      template.pages = template.pages.filter(
        (page, index) => index !== activePage.index
      );
      setTemplate(Object.assign({}, template));
      // init first page
      setActivePage(
        template.pages[activePage.index - 1]
          ? { index: activePage.index - 1 }
          : { index: 0 }
      );
    }
  };
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        height: "56px",
      }}
    >
      <div style={{ display: "flex" }}>
        {template && template.pages.length > 0 ? <Page /> : null}
      </div>
    </div>
  );
}

export default Default;
