import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowUser from "./blog/ShowUser.jsx";
import CreateUser from "./blog/CreateUser.jsx";
import EditarUser from "./blog/EditarUser.jsx";



function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <ShowUser />} />
          <Route path="/create" element={ <CreateUser />} />
          <Route path="/edit/:id" element={ <EditarUser />} />

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
