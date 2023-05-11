//useRef
import React from "react";
import UseRef from "./useRef/UseRef";
import UseMemo from "./useMemo/UseMemo";
import UseCallback from "./useCallback/UseCallback";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer";
import Memo from "./memo/Memo";
import CodeSplitting from "./Theory/CodeSplitting";
import ReactDom from "./Theory/ReactDom";

const App = () => {
  return (
    <div>
      {/* React Examples UseRef
        <UseRef /> */}

      {/* Useemo*/}
      <UseMemo />

      {/* useCallback   
      <UseCallback /> */}

      {/* useContext
      <UseContext /> */}
      {/* <UseReducer/> */}
      {/* <Memo/> */}

      {/* ----------------------------Theory Based Components----------------------------*/}
      {/* <CodeSplitting/> */}
      <ReactDom/>
    </div>
  );
};

export default App;
