import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Publish } from './components/Publish';
import { History } from './components/History';
import { Book } from './components/Book';
import { Profile } from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className='container'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/publish" element={<PrivateRoute><Publish/></PrivateRoute>} />
            <Route path="/history" element={<PrivateRoute><History/></PrivateRoute>} />
            <Route path="/book" element={<PrivateRoute><Book/></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
