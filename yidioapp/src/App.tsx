import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Denver"];
  let colorItems = ["Green", "Yellow", "Blue"];

  const handleSeletedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Cities"
        onSelectedItem={handleSeletedItem}
      />
      <ListGroup
        items={colorItems}
        heading="List of Color"
        onSelectedItem={handleSeletedItem}
      />
    </div>
  );
}

export default App;
