interface ListGroupProp {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProp) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>List is Empty</p>}
        {items.map((item, index) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
