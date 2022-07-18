import { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import productApi from './API/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import Counter from './features/Counter';
function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const ProductList = await productApi.getAll(params);
      console.log(ProductList);
    };
    fetchProduct();
  }, []);
  return (
    <div className='App'>
      <p>
        <Link to='/'>Homepage</Link>
      </p>
      <p>
        <NavLink to='/todos'>Todos</NavLink>
      </p>
      <p>
        <NavLink to='/albums'>Albums</NavLink>
      </p>
      <Routes>
        {/* <Route index element="/home" /> */}
        <Route path='/' element={<Counter />}></Route>
        <Route path='/todos/*' element={<TodoFeature />}></Route>
        <Route path='/albums' element={<AlbumFeature />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {/* <Route path="/albums" component={AlbumFeature} /> */}
    </div>
  );
}

export default App;
