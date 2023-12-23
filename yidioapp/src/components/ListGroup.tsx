import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransico", "Denver"];
  const getMessage = () => {
    return items.length == 0 ? <h1>No Item in list</h1> : null;
  };
  //Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.length == 0 && <p>List is Empty</p>}
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
