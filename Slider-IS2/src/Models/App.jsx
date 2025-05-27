import '../Styles/App.css';
import Slider from '../Models/Slider.jsx';

function App() {
  return (
    <div className="App">
      <div className='loginForm'>
        <label>User Name</label>
        <input type="text" className="userName" placeholder="User Name"/>
        <label>Password</label>
        <input type="password" className="password" placeholder="Password"/>

        <div className='sliderContainer'>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;
