import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center bg-blue-900'>
            <Link to='/' className=' px-10 py-4 text-2xl font-medium'>Media Search</Link>
            <div className='flex items-center gap-6 px-8 '>
                <Link className='text-base font-medium rounded px-4 py-2 bg-white text-black active:scale-95' to='/'>Search</Link>
                <Link className='text-base font-medium rounded px-4 py-2 bg-white text-black active:scale-95' to='/collection'>Collection</Link>
            </div>
        </div>
  )
}

export default Nav