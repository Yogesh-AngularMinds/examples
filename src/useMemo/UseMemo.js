import React, { useMemo, useState } from "react";

// test function will call only when count is increment
// when we click on item button it only increment item without calling test function

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);

  const test = useMemo(() => {
    console.log("test");
    return count * 3;
  }, [count]);
  return (
    <>
      <div>
        Count: {count}
        <h2>{test}</h2>
        <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        <button onClick={() => setItem(item + 1)}>Items{item}</button>
      </div>
    </>
  );
};

export default UseMemo;
