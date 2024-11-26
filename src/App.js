import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
// Import your page components


const App = () => {

    return (
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
  );
};

export default App;