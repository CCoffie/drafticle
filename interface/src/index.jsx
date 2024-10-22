import "react-app-polyfill/ie11";
import * as React from "react";
import { createRoot } from 'react-dom/client';
import Providers from "./Providers";
import Editor from "./Editor";
import Container from "./Container";
import { Template } from "./constants/editor";

const root = createRoot(document.getElementById('root'));
root.render(
  <Providers>
    <Container>
      <Editor template={Template} adminRole={true} />
    </Container>
  </Providers>
);
