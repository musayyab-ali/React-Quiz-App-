import React, { useState } from "react";

const usestates = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUser] = useState([
    { name: "Ali", age: "21", country: "Pakistan" },
  ]);

  const submitform = (e) => {
    const user = {
      name: "Arman",
      age: "20",
      country: "Pakistan",
    };
    setUser([...users, user]);
  };
  return (
    <>
      <div className="App">
        <div>
          {users.map((user, pos) => {
            return (
              <div key={pos}>
                <h2>
                  Name:{user.name} - Age:{user.age}
                </h2>
                <p>Country:{user.country}</p>
              </div>
            );
          })}
        </div>
        <button onClick={submitform} className="button-three">
          Add New User
        </button>
        <br />
        {/* <button onClick={() => setNum(num + 1)} className="button-three">
          Increment The Nums
        </button>
        <h2 className="blogcard">{num}</h2>
        <button onClick={() => setNum(num - 1)} className="button-three">
          Decrement The Nums
        </button> */}
      </div>
    </>
  );
};

export default usestates;
