import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Feature/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movie } from './Pages/Movie/Movie';
import Series from './Pages/Series/Series';
import { Home } from './Home/Home';


function App() {
  
  return (
      
         <BrowserRouter>
          <Layout>
            <Routes>
              <Route  path = "/" element ={<Home/>}/>
              <Route path = "/movies" element ={<Movie/>}/>
              <Route path = "/series" element ={<Series/>}/>
           
            </Routes>
            </Layout>
         </BrowserRouter>
       
  );
}

export default App;
