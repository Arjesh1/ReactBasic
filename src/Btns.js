export const Btns = ({ update }) => {
  return (
    <>
      <button onClick={() => update("-")}> - </button>{" "}
      <button onClick={() => update("+")}> + </button>
      <br />
      <button onClick={() => update("reset")}> Reset </button>
    </>
  );
};
