import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Denver"];
  return (
    <div>
      <ListGroup items={items} heading="List of Cities" />
    </div>
  );
}

export default App;
