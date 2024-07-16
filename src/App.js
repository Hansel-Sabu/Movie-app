import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddMovie/>}/>
      <Route path='/view' element={<ViewAll/>}/>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
