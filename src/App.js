import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Feature/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movie } from './Pages/Movie/Movie';
import Series from './Pages/Series/Series';
import { Home } from './Home/Home';
import Details from './Pages/TvDetails/Details';


function App() {
  
  return (
      
         <BrowserRouter>
          <Layout>
            <Routes>

              {/* Home Pages */}
              <Route  path = "/" element ={<Home/>}/>
              <Route  path = "/:id" element ={<Details/>}/>

                {/* Movie Page */}
              <Route path = "/movies" element ={<Movie/>}/>
              <Route  path = "/movies/:id" element ={<Details/>}/>

                {/* series Page */}
              <Route path = "/series" element ={<Series/>}/>
              <Route  path = "series/:id" element ={<Details/>}/>

            
            </Routes>
            </Layout>
         </BrowserRouter>
       
  );
}

export default App;
