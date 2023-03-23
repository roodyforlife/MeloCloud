import Player from './components/Player';
import {BrowserRouter} from 'react-router-dom';
import styles from './styles/App.module.css';
import AppRouter from './components/AppRoutes';
import { observer } from "mobx-react-lite";
import { check } from './http/userApi';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import Spinner from './components/UI/Spinner/Spinner';


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      check().then(data => {
        user.setUser(true);
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if(loading){
    return <Spinner />
  }

  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/* <Player /> */}
    </div>
  );
});

export default App;
