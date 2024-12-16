import { useEffect, useState, useRef } from "react";
import { Text } from "./components/Text";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [styleFirst,setStyleFirst] = useState('');
  const [styleSecond,setStyleSecond] = useState('');
  const [styleThird,setStyleThird] = useState('');
  // const [inputValue,setInputValue] = useState('')
  const inputRefFirst = useRef(null);
  const inputRefSecond = useRef(null);
  const inputRefThird = useRef(null);
  const inputFile = useRef(null);



  

  const handleClick1 = () => {
    inputRefFirst.current.focus();
    inputRefFirst.current.style.backgroundColor = 'red';
    inputFile.current.click();
  //  setStyleFirst('backgroundFirst')

    // setCount((prev) => prev + 1);
    // inputRef.current = inputRef.current + 1;
    // console.log(inputRef);
  };
  const handleClick2 = () => {
    inputRefSecond.current.focus();
    inputRefSecond.current.style.backgroundColor = 'green';
  //  setStyleSecond('backgroundSecond')
    // setCount((prev) => prev + 1);
    // inputRef.current = inputRef.current + 1;
    // console.log(inputRef);
  };
  const handleClick3 = () => {
    inputRefThird.current.focus();
    inputRefThird.current.style.backgroundColor = 'green';
  //  setStyleThird('backgroundThird')
    // setCount((prev) => prev + 1);
    // inputRef.current = inputRef.current + 1;
    // console.log(inputRef);
  };

  //{current:0}

  useEffect(() => {
    console.log("RE-RENDER");
  });

  const handleInput = (e)=>{
    inputRefFirst.current = e.target.value;

    console.log(inputRefFirst.current)
  }

  return (
    <>
      <button onClick={handleClick1}>click me and focus input</button>
      <button onClick={handleClick2}>click me and focus input</button>
      <button onClick={handleClick3}>click me and focus input</button>
      <input type="text" placeholder="Typing me"  value={inputRefFirst.current} ref={inputRefFirst} onChange={handleInput} />
      <input type="text" placeholder="Typing me" ref={inputRefSecond}  />
      <input type="text" placeholder="Typing me" ref={inputRefThird} />
      <Text>

        <button>Click me</button>
        <button>Click me</button>
        <button>Click me</button>
        <button>Click me</button>

      </Text>

   
 
      {/* {inputValue && <span>{inputValue}</span>} */}
      <input type="file" ref={inputFile}/>
      {/* <p>{count}</p> */}
    </>
  );
}

export default App;
