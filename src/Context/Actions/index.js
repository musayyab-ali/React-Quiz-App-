export const IncrementNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const DecrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};
