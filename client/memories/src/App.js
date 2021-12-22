import './App.css';
import Navbar from './Navbar';
import Posts from './Posts';
import Form from './Form';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_middle">
        <div className="app_middleLeft">
        <Posts />
        </div>
        <div className="app_middleRight">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
