import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "danger" | "secondary" | "success"; //? means Optional for color property
}
function MyButton({ children, onClick, color = "primary" }: Props) {
  return (
    <div>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </div>
  );
}

export default MyButton;
