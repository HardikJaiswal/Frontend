import react from 'react';
import GeneralHome from './General-Homepage/GeneralHome';
import UserHome from './User-Homepage/UserHome';
import Profile from './User-Homepage/Profile';
import History from './User-Homepage/History';
import {Route, Routes} from 'react-router-dom';

class App extends  react.Component{
  render() {
    return (
      <>
        <Routes>
          <Route exact path='/' element={<GeneralHome />}/>
          <Route path='/user-home' element={<UserHome />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/History' element={<History />} />
        </Routes>
      </>
    );
  }
}

export default App;
