import styled from "styled-components";

function App() {
  return (
    <>
      <Button>this is style conponrnt button</Button>
    </>
  );
}

export default App;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;
