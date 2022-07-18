import { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import productApi from './API/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import Counter from './features/Counter';
import TodoFeature from './features/Todo';
import Header from './components/Header'

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
      <Header/>
      <p>
        <Link to='/'>Homepage</Link>
      </p>
     
      <Routes>
        {/* <Route index element="/home" /> */}
        <Route path='/' element={<Counter />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {/* <Route path="/albums" component={AlbumFeature} /> */}
    </div>
  );
}

export default App;
