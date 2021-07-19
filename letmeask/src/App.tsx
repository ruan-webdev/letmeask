
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} /> {/*caminho pela qual a pessoa vai acessar, no caso sendo o component home, mas podendo ser por exemplo{Cadastro}*/}
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;
