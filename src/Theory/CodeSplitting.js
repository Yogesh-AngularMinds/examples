import React from "react";

function CodeSplitting() {
  return (
    <div>
      <h2>Code Splitting in React:</h2>
      Code-Splitting is a feature supported by bundlers like Webpack, Rollup,
      and Browserify which can create multiple bundles that can be dynamically
      loaded at runtime.
      <br />
      <h2> Examples :</h2>
      <h4>The default way of importing is as follows:</h4>
      <p>import {"add"} from './math';</p>
      <p>console.log(add(x, y)); // Here x, y are two numbers</p>
      <h4> Using code-splitting this can be done as follows:</h4>
      <p>
        import("./math").then(math ={">"} {"console.log(math.add(x, y));"});
      </p>
      // Here x, y are two numbers
    </div>
  );
}

export default CodeSplitting;
