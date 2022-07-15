import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import Invoices from "./features/Invoices";

function App() {
  return (
    <div className="App">
      <p>
        <Link to="/">Homepage</Link>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Routes>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoices />} />
        </Route>
        {/* <Route index element="/home" /> */}
        <Route path="/todos" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
      </Routes>
      {/* <Route path="/albums" component={AlbumFeature} /> */}
    </div>
  );
}

export default App;
