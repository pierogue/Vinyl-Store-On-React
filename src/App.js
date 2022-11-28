import './App.css';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import Catalog from './Catalog.js'
import SearchLine from './SearchLine';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  // const count = useSelector((state) => state.counter.value);
  // // Возвращает метод store.dispatch() текущего хранилища
  // const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
          <AppHeader />
          <SearchLine />
          <div className='CatalogContainer'>
            <Catalog />
          </div>
          <AppFooter/>
        </>} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
