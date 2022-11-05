import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./Components/ClassComp";
import FunctionComp from "./Components/FunctionComp";
import PropsClassComp from "./Components/PropsClassComp";
import PropsFuncComp from "./Components/PropsFuncComp";
import ComponentA from "./Components/ComponentA";
import React, { createContext, useState } from "react";
import FormComp from "./Components/FormComp";
import ClassLC from "./Components/ClassLC";
import FuncLC from "./Components/FuncLC";
import UseReducerComp from "./Components/UseReducerComp";
import UseMemoComp from "./Components/UseMemoComp";
import UseCallback from "./Components/UseCallback";
import UseForm from "./Components/UseForm";
import NewForm from "./Components/NewForm";
import UseFetchHook from "./Components/UseFetchHook";

export const messageContext = createContext(null);
function App() {
  const [mount, setMount] = useState(true);
  return (
    <div className="App">
      {/* <ClassComp/>
      <FunctionComp/> */}
      {/* <PropsClassComp num={10} name="Aman" /> */}
      {/* <PropsFuncComp /> */}
      {/* <FunctionComp/> */}

      {/* <messageContext.Provider value={"Message from App.js"}>
        <ComponentA />
      </messageContext.Provider> */}
      {/* <FormComp/> */}
      {/* {mount && <ClassLC/>} */}
      {/* {mount && <FuncLC/>}
      <div>
        <button onClick={()=> setMount(!mount)}>Mount/Unmount</button>
      </div>
       */}
      {/* <UseReducerComp/> */}
      {/* <UseMemoComp/> */}
      {/* <UseCallback/> */}
      {/* <UseForm /> <br /><br />
      <NewForm /> */}
      <UseFetchHook/>
    </div>
  );
}

export default App;
