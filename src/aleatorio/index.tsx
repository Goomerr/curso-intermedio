import { styled } from "goober";
import { CSSProperties } from "react";
import { emittedId } from "../events/selected";


const Container = styled("div")<{ visible: boolean }>`
  display: flex;
  width: 18rem;
  padding: 10px;
  gap: 1rem;

  background-color: gray;
  border-radius: 15px;

  position: relative;
  p {
    margin: 0;
  }

  .mask {
    position: absolute;
    inset: 0;
    background-color: #1f9ea79d;
    border-radius: 15px;
    height: 100%;
    width: 100%;

    display: ${props => props.visible ? 'block' : 'none'};
  }

  .container-image {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .image {
      width: 50px;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .title {
    font-size: 2rem;
    color: #ececec;
    font-family: var(--font-family);
  }

  .description {
    font-size: 1.2rem;
    color: #ffffff;
  }
`;

export interface params {
  id: string;
  isVisible: boolean;
  style?: CSSProperties;
  title: string;
  description?: string;
  image: string;

  onClick?: (value: string) => void;
}

/**
 * className internos para editar
 * - container-image
 *   - image
 * - body
 *   - title
 *   - description
 *
 * @param params
 * @returns
 */

function App(params: params): JSX.Element {

  const handleClick = () => {

    emittedId(params.id)

}
  return (
    <Container
      className="container"
      visible={params.isVisible}
      style={params.style}
      onClick={handleClick}
    >
      <div className="mask"></div>
      <div className="container-image">
        <img src={params.image} alt="icon" className="image" />
      </div>

      <div className="body">
        <p className="title">{params.title} </p>
        <p className="description">{params.description}</p>
      </div>
    </Container>
  );
}

export default App;
