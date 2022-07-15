import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";

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
        {/* <Route index element="/home" /> */}
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>  
      {/* <Route path="/albums" component={AlbumFeature} /> */}
    </div>
  );
}

export default App;
