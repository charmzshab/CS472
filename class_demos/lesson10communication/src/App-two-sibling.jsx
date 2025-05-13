import React, { useState } from "react"
import A from "./components/two-sibling/A"
import B from "./components/two-sibling/B"

function App() {
  const [message, setMessage] = useState('');
  const getMsg = (msg) => setMessage(msg);
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      It is an App.
      <A onGetMsg={getMsg} />
      <B message={message} />
    </div>
  );
}


export default App;
