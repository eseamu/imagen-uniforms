
import './App.css';
import Button from '@material-ui/core/Button'
import {Icon} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/styles'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
        <ThemeProvider>
        <NavBar/>
    <div className="App">
      <h1>Bienvenidos a Imagen Uniformes!</h1>
      <Button 
        color ="primary" 
        variant="contained"
        href="#">
            CLICK PARA INGRESAR
      </Button>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
