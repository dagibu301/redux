import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Auth />
      <Counter />
    </Provider>
  );
}

export default App;
