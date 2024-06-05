import React from "react";
import CreateAccount from "./components/CreateAccount";
import DeleteYourAccount from "./components/DeleteYourAccount"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b-custom font-open" >
      <div className="flex p-14 flex-col lg:flex-row gap-14 ">
      <CreateAccount/>
      <DeleteYourAccount/>
      </div>
    </div>
  );
}

export default App;
