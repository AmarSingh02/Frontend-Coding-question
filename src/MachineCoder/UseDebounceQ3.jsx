import React, { useEffect, useState } from 'react'



const UseDebounceQ3 = ({query,delay}) => {

  const [debounceValue,setDebouceValue]=useState(query);

  useEffect(()=>{
    let timer=setTimeout(() => {
      setDebouceValue(query)
    }, delay);

    return ()=>clearTimeout(timer)
  },[query,delay])

  return debounceValue;
}

export default UseDebounceQ3


// const App = () => {
//   const [inputValue, setInputValue] = useState("");

//   const debouncedValue = useDebounceQ3(inputValue, 500);

//   useEffect(() => {
//     if (debouncedValue) {
//       console.log("API call:", debouncedValue);
//     }
//   }, [debouncedValue]);

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Search..."
//       />
//     </div>
//   );
// };

// export default App;

