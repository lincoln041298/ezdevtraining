import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
export default function index() {
  return (
    <div>
      <Routes>
        <Route path="/todo" element={<ListPage />}></Route>
        <Route path="todo/:todoId" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}
