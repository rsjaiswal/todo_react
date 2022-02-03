import {
  useRef,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button from Child</button>
      {toggle && <span>toggle</span>}
    </>
  );
});

function App() {
  const elementRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  useLayoutEffect(() => {
    console.log("hello world");
  });

  // useEffect(() => {
  //   const divElement = elementRef.current;
  //   console.log(divElement);
  //   inputRef.current.focus();
  //   inputRef.current.value = "Enter something in the value";
  // }, []);

  return (
    <div>
      <p>I'm an element</p>

      <div ref={elementRef}>
        <p>hello world this </p>
      </div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        click on the button
      </button>
      <input type="text" ref={inputRef} />

      <Button ref={buttonRef} />
    </div>
  );
}

export default App;
