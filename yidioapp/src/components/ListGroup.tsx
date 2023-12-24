import { useState } from "react";

interface ListGroupProp {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProp) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>List is Empty</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
