import { styled } from "goober";
import {  useEffect } from "react";
import { emiter } from "../events/selected";



const Container = styled("div")``;


function App(): JSX.Element {

  useEffect(() => {
    emiter.on("data", console.log);

    return () => {
      emiter.removeListener("data");
    };
  }, []);

  return <Container></Container>;
}

export default App;
