function ListGroup() {
  let items = ["New York", "San Fransico", "Denver"];
  items = [];
  const getMessage = () => {
    return items.length == 0 ? <h1>No Item in list</h1> : null;
  };
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.length == 0 && <p>List is Empty</p>}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
