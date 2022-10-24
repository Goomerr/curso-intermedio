import { styled } from "goober";
import { emittedId } from "./events/selected";
import Listener from "./listener";

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
  const { data } = useSelect();

  const handleSelectDefault = () => emittedId(data[0].title);

  return (
    <Container>
      {data.map((v, i) => (
        <Card key={i} {...v} id={v.title} />
      ))}
      <button onClick={handleSelectDefault}>Hola</button>
      <Listener />
    </Container>
  );
}

export default App;
