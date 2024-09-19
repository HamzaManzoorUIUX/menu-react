import React from 'react'
import Collapsable from './components/Collapsable'
import Slider from './components/Slider'
import { loadWebbridge, WebbridgeProvider } from "@tapcart/webbridge-react";

const App = () => {
  const webbridgeClient = loadWebbridge({ test: false });
  return (
    <WebbridgeProvider webbridgeClient={webbridgeClient}>
    <div>
      <Collapsable />
      {/* <Slider /> */}
    </div>
    </WebbridgeProvider>
  )
}

export default App