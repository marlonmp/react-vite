import * as React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>Hello mom!!</div>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
}

export default App;
