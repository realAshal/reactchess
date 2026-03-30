const Square = ({ isBlack, piece }) => {
  return (
    <div className={`square ${isBlack ? "black" : "white"}`}>
      {piece}
    </div>
  );
};

export default Square;