import * as React from 'react'
// import { Client as Styletron } from 'styletron-engine-atomic'
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, DarkTheme } from 'baseui'
import { EditorProvider } from './canvas'
import { AppProvider } from './contexts/AppContext'
const engine = new Styletron()

const Providers = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <EditorProvider>
        <BaseProvider theme={DarkTheme}>
          <AppProvider>{children}</AppProvider>
        </BaseProvider>
      </EditorProvider>
    </StyletronProvider>
  )
}

export default Providers
