
import HomaPage from './pages/HomaPage';
import {Route,Routes} from 'react-router-dom'
import CollectionPage from './pages/CollectionPage';
import Nav from './components/Nav';
import {ToastContainer} from'react-toastify'
const App = () => {
  
  return (
    <div className='w-full min-h-screen text-white bg-gray-950'>
      <Nav/>
       <Routes>
        <Route path='/' element={<HomaPage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
       </Routes>
    
    <ToastContainer/>
    </div>
  )
}

export default App
 