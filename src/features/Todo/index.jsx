import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
export default function index() {
  return (
    <div>
    
      <Routes>
        <Route path="/todos" component={ListPage}></Route>
        <Route path="todos/:todoId" component={DetailPage}></Route>
      </Routes>
    </div>
  )
}

