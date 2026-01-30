
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos','videos','gifs']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) =>state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map((elem,idx)=>(
          
            <button 
            className={`${(activeTab==elem?'bg-blue-500':'bg-gray-500')} transition active:scale-95 px-3 py-2 rounded uppercase`}
             key={idx}
             onClick={() => {
              dispatch(setActiveTabs(elem))
             }}
             >
              {elem}
            </button>
          
        ))}
        
    </div>
  )
}

export default Tabs