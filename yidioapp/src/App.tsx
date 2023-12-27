import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div>
      <MyButton onClick={() => console.log("Clicked")} color="success">
        My Button
      </MyButton>
    </div>
  );
}

export default App;
