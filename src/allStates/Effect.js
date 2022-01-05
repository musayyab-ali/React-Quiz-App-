import React, { useEffect, useState } from "react";
const Effect = () => {
  const [count, setcount] = useState(1);
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    console.log("I am A New On This Page", new Date(), count);
    return () => console.log("Now I m Finish My First Activity....");
  }, [count, toggle]);
  return (
    <>
      <div className="App">
        <button className="button-three" onClick={() => setcount(count + 1)}>
          Add Or Update
        </button>
        <button className="button-three" onClick={() => settoggle(!toggle)}>
          Update toggle
        </button>
      </div>
    </>
  );
};

export default Effect;
