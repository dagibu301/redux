import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
};

export default App;
