import logo from './logo.svg';
import './App.css';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';

import {store} from './redux/reducer/rootReducer';
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BaiTapBookingTicket/>
      </Provider>
    </div>
  );
}

export default App;
