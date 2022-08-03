
const Button = (): JSX.Element => {
  return (
    <button style={styles.container}>
      File Button
    </button>
  )
};

const styles = {
  container: {
  backgroundColor: "#3f51b5",
  color: "white",
  padding: "5px 15px",
  borderRadius: "5px",
  outline: 0,
  textTransform: "uppercase",
  margin: "10px 0px",
  cursor: "pointer",
  boxShadow: "0px 2px 2px lightgray",
  transition: "ease background-color 250ms",
  "&:hover": {
    backgroundColor: "#283593"
  },
  "&:disabled": {
    cursor: "default",
    opacity: 0.7
  }
  }
} as const;

export { Button };