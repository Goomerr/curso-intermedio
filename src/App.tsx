import { styled } from "goober";

import Card from "./aleatorio";
import useSelect from "./hooks/useSelect";

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  --font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
`;

function App(): JSX.Element {

  const {data, handleClick}= useSelect();
 
  return (
    <Container>
      {data.map((v, i) => (
        <Card key={i} {...v} id={v.id} onClick={handleClick} />
      ))}
    </Container>
  );
}

export default App;
