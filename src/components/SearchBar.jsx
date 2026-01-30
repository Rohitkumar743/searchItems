import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch()

    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(text)
        dispatch(setQuery(text))
        setText('')
        
    }

  return (
    <div className='bg-gray-700'>
       <form onSubmit={(e) =>handleSubmit(e)} className='w-full p-10 flex gap-8'>
        <input
            required
            type='text'
            value={text}
            placeholder='Search items'
            className='text-xl w-full border rounded-md px-4 py-2 outline-none'
            onChange={(e) => setText(e.target.value) }
        />
        <button className='text-xl border rounded-md px-4 py-2'>Search</button>
       </form>
    </div>
  )
}

export default SearchBar
