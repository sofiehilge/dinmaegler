import "./App.css";
import tw from "tailwind-styled-components";

function App() {
  const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600`;

  return (
    <>
      <Container>
        <h2>Hello World!</h2>
      </Container>
      <h1 className="text-3xl font-bold text-red-500 underline text-center">
        Hello world!
      </h1>
    </>
  );
}

export default App;
