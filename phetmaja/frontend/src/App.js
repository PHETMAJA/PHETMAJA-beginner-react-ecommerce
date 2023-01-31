import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">phetmaja</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:slug" element={<ProductScreen />} exact />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
