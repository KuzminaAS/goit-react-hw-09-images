import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import styles from './Photos.module.css';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import Loader from "../Loader";

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrantPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState('');

    const listRef = useRef();  

    useEffect(() => {
       
        const fetchPhotos = async () => {
            try {
                const url = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=20944860-c17ba5e7d5700a2a7880c4ee2&image_type=photo&orientation=horizontal&per_page=${limit}`;
                const { data } = await axios.get(url);
                setLoading(false);
                setPhotos([...photos, ...data.hits]);
            } catch (error) { setError(error) }
        }
         if (isLoading) {
            fetchPhotos();
         }
        
    }, [isLoading, limit, currentPage, query, photos]);

    
   const onSearchQuery = query => {
       setQuery(query);
       setCurrantPage(1);
       setLimit(12);
       setPhotos([]);
       setError(null);
       setLoading(true);
   }
    const loadMore = (e) => {
        e.preventDefault();
        setCurrantPage(prevCurrantPage => prevCurrantPage + 1);
        setLoading(true);
    }
      const openModal = (largeImageURL) => {
        setShowModal( !showModal)
        setLargeImageURL(largeImageURL)
    }    

   const closeModal = () => {
        setShowModal(false)
}  
    return (
            <div className="Photos">
                {showModal && <Modal closeModal={closeModal}><img src={largeImageURL} alt=""/></Modal>}
                <Searchbar onSubmit={onSearchQuery} />
                    
            <div ref={listRef}><ImageGallery openModal={openModal} list={photos}/> </div> 
              <div ref={listRef}><ImageGallery list={photos}/> </div> 
                    
                {error && <p>Something was wrong ...</p>}
                {isLoading && !error && <Loader />}
               <div className={styles.container}>  <Button onClick={loadMore}/> </div>
            </div>
        );
}


// class Photos extends Component {
//    state = {
//         pictures: [],
//         page: 1,
//         limit: 12,
//         isLoading: false,
//         query: '',
        
//         error: null,
//         largeImageURL: "",
//         showModal: false
//    }

//     listRef = createRef()
    
//     // componentDidMount() {
//     //     this.fetchPictures();
//     // }
    
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         if (prevState.pictures.length < this.state.pictures.length) {
//             const { current } = this.listRef;
//             return current.scrollHeight

//         }
//         return null
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         const {isLoading} = this.state;
//         if (isLoading) {
//             this.fetchPictures();
//         }

//         if (snapshot !== null) {
//                 window.scrollTo({
//                     top: snapshot,
//                     behavior: "smooth"
//                 });
//         } 
//     }

   
//     fetchPictures() {
//         const { page, limit, query } = this.state;

//         const picturesRequest = getPagePhotos({ page, limit, query });
        
//         picturesRequest
//             .then(({ data }) => this.setState(({ pictures }) => {
                
//                 const newPictures = [...pictures, ...data.hits];

//                 return {
//                     pictures: newPictures,
//                     isLoading: false,
//                 }
//             }))
//             .catch(error => this.setState({
//                 error,
//                 isLoading: false,
//             }))
//             .finally(() => this.setState({isLoading: false}))
//     }

//     searchPictures = (query) => {
//         this.setState({
//             pictures: [],
//             isLoading: true,
//             query
//         })
//     }

//     loadMore = (e) => {
//         e.preventDefault();
//         this.setState(({ page }) => {
//             return {
//                 isLoading: true,
//                 page: page + 1,
//             }
//         })
//     }

//    openModal = (largeImageURL) => {
//         this.setState(({showModal}) => ({
//             showModal: !showModal,
//             largeImageURL
//         }))
//     }    

//     closeModal = () => {
//         this.setState({showModal: false})
//     }    

//     render() {
//         const { pictures, isLoading, error, largeImageURL, showModal} = this.state;
//         const { listRef, searchPictures, loadMore, closeModal, openModal} = this;
    
//         return (
//             <div className="Photos">
//                 {showModal && <Modal closeModal={closeModal}><img src={largeImageURL} alt=""/></Modal>}
//                 <Searchbar onSubmit={searchPictures} />
                    
//                 <div ref={listRef}><ImageGallery openModal={openModal} list={photos}/> </div> 
                    
//                 {error && <p>Something was wrong ...</p>}
//                 {isLoading && !error && <Loader />}
//                <div className={styles.container}>  <Button onClick={loadMore}/> </div>
//             </div>
//         );
//   }
// };

// export default Photos;
