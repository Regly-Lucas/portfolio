import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Conteudo from './componentes/Conteudo/Conteudo';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Conteudo />
      </div>
    </BrowserRouter>
  );
}

export default App;
