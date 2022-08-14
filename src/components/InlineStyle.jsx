export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #000",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "8px",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    margin: 0,
    color: "orange",
  };
  const buttonStyle = {
    backgroundColor: "blue",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles =</p>
      <button style={buttonStyle}>nice</button>
    </div>
  );
};
