import styled from "styled-components";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: #b34dfc;
  border-radius: 10px;
  padding: 2em 1.5em;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 1em;
  background-color: #eee;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 500;
`;

const Subtitle = styled.h2`
  color: white;
  margin-bottom: 0.7em;
`;

const Lists = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
  background-color: #f2f2f2;
  padding: 0.8em;
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: gray;
  }
`;

const LinkTag = styled.a`
  &:hover {
    color: blueviolet;
  }
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Title>Custom React-typescript Boiler</Title>
        <Subtitle>This boiler is filled with:</Subtitle>
        <Lists>
          <ListItem>
            Created with Vite{" "}
            <LinkTag href="https://vitejs.dev/guide/" target="_blank">
              <LinkIcon />
            </LinkTag>
          </ListItem>
          <ListItem>
            Styled Components
            <LinkTag
              href="https://styled-components.com/docs/api"
              target="_blank"
            >
              <LinkIcon />
            </LinkTag>
          </ListItem>
          <ListItem>
            Axios
            <LinkTag href="https://axios-http.com/docs/intro" target="_blank">
              <LinkIcon />
            </LinkTag>
          </ListItem>
          <ListItem>
            React Redux
            <LinkTag href="https://react-redux.js.org/" target="_blank">
              <LinkIcon />
            </LinkTag>
          </ListItem>
          <ListItem>
            React Router DOM
            <LinkTag
              href="https://v5.reactrouter.com/web/guides/quick-start"
              target="_blank"
            >
              <LinkIcon />
            </LinkTag>
          </ListItem>
          <ListItem>
            React Icons
            <LinkTag
              href="https://react-icons.github.io/react-icons"
              target="_blank"
            >
              <LinkIcon />
            </LinkTag>
          </ListItem>
        </Lists>
      </Wrapper>
    </Container>
  );
}

export default App;
