import {fetchPhotos,fetchVideos,fetchGifs} from '../api/mediaApi'
import {setLoading, setError, setResults} from '../redux/features/searchSlice'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import ResultCard from './ResultCard'


const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query,activeTab,results,loading,error} = useSelector((store) => store.search)

    useEffect(function() {
      const getData = async () =>{
        if(!query) return
        try {
            dispatch(setLoading())
            let data = []
            if(activeTab == 'photos'){
                let response = await fetchPhotos(query)
                data = response.results.map((item) => ({
                    id:item.id,
                    type:'photo',
                    title:item.alt_description,
                    thumbnail:item.urls.small,
                    src:item.urls.full,
                    url:item.links.html
                }))
                
            }
            if(activeTab == 'videos'){
                let response = await fetchVideos(query)
                data = response.videos.map((item) => ({
                    id:item.id,
                    type:'video',
                    title:item.user.name || 'video',
                    thumbnail:item.image,
                    src:item.video_files[0].link,
                    url:item.url
                }))
                console.log(data)
                
            }
            if(activeTab == 'gifs'){
                let response = await fetchGifs(query)
                data = response.data.map((item) =>({
                    id:item.id,
                    type:'gif',
                    title:item.title,
                    src:item.images.original.url,
                    url:item.url
                }))
                
            }

            dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.massage))
        }
      } 
      getData()
    }, [query, activeTab,dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading</h1>
    
  return (
    <div className='flex flex-wrap justify-between w-full overflow-auto gap-6 px-5'>
        {results.map((item,idx) => {
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGrid