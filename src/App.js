import './App.css';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
// import Home from './containers/Home/Home';
const Home = lazy(() => import('./containers/Home/Home'));

function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Home />
    </Suspense>
  );
}

export default App;
