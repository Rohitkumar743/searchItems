import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CollectionCard from './../components/CollectionCard';
import {clearCollection} from '../redux/features/collectionSlice'


const CollectionPage = () => {
    const collection = useSelector(state=>state.collection.items)

    const dispatch = useDispatch()
    const clearAll = () =>{
        dispatch(clearCollection())
    }
    
  return (
    <div className='px-6 overflow-auto py-6'>
        {collection.length > 0 ? 
            <div className='flex justify-between mb-6'>
            <h2 className='text-2xl font-medium'>Your Collection</h2>
            <button onClick={() => {
                clearAll()
            }} className='px-4 py-2 bg-red-500 rounded text-lg font-medium active:scale-95'>Clear Collection</button>
            </div> 
            :
            <h2 className='text-center text-2xl font-bold'>Your Collection is Empty</h2>
        }
       
        <div className='flex justify-start w-full flex-wrap gap-5 '>
            {collection.map((item,idx) =>{
                return <div key={idx}>
                    <CollectionCard item={item}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default CollectionPage