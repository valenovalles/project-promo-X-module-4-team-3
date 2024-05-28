import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import Page from './Page';




function App() {




  
  return (
   <div className='container'>
     <Header/>
        <Routes>
            <Route path= "/" element={<LandingPage/>} />
            <Route path="/main" element={<Page/> }/>
            <Route path="*" element={ <p>Página no encontrada</p> } />
        </Routes>
       <Footer/>


   </div>
   
   
  )
}

export default App
