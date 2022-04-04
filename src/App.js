import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Feature/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movie } from './Pages/Movie/Movie';
import Series from './Pages/Series/Series';
import Show from './Pages/Show.js/Show';

function App() {
  
  return (
      
         <BrowserRouter>
          <Layout>
            <Routes>

              <Route path = "/" element ={<Movie/>}/>
              <Route path = "/series" element ={<Series/>}/>
              <Route path = "/shows" element ={<Show/>}/>

              
            </Routes>
            </Layout>
         </BrowserRouter>
       
  );
}

export default App;
