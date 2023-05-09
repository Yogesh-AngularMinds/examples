import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRef;
