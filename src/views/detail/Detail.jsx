import { useParams } from "react-router-dom";
import { useEffect } from "react";

//redux
import { getDetail, cleanDetail, loading } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

//components
import DetailArrays from "../../components/detailArrays/DetailArrays";
import Loading from "../../components/loading/Loading";

//styles
import styles from './Detail.module.css';


function Detail() {
    const { id } = useParams();
    
    //redux
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.detailVideogame);
    const isLoading = useSelector(state => state.isLoading);
    
    //string with \n to array
    const description = videogame.description?.split('\n\n');

    useEffect(() => {
        (async () => {
            dispatch(loading());
            await dispatch(getDetail(id));
            dispatch(loading());
        })();

        return () => dispatch(cleanDetail());
    }, []);

    if(!videogame.tags || isLoading) return(<div><Loading /></div>)

    return(
        <div className={styles.videogameDetail}>
            <div className={styles.front}>
                <div>
                    <div className={styles.data}>
                        <h2 className={styles.released}>{videogame.released}</h2>
                        <h2 className={styles.rating}>{videogame.rating}</h2>
                    </div>
                    <h2 className={styles.name}>{videogame.name}</h2>
                    <span className={styles.id}>ID: {videogame.id}</span>
                </div>
                
                <div className={styles.videogameImg}>
                    <img src={videogame.image} alt={videogame.name} />
                </div>
            </div>

            <div className={styles.info}>
                <div>
                    <div className={styles.about}>
                        <h2>About</h2>
                        {
                            description?.map((sentence, i) => {
                                return <p key={i}>{sentence}</p>
                            })
                        }
                    </div>
                </div>

                <div className={styles.arrays}>

                    <DetailArrays name='platforms' array={videogame.platforms} />

                    <DetailArrays name='genres' array={videogame.genres} />

                    <DetailArrays name='tags' array={videogame.tags} />
                </div>
            </div>
        </div>
    )
}

export default Detail