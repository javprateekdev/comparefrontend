
import './App.css';
import Page from './Page';
import Header from './Header'
import View from './View';
import { Provider } from 'react-redux';
import store from './store/store';
import Footer from './Footer';

function Project() {
  return (

    <div>
      <Provider store={store}>
  <Page/>
  <View/>

   </Provider>

    </div>
  );
}

export default Project;
