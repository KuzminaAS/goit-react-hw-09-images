import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from './Loader.module.css'


const LoaderComponent = () => {
  return ( <Loader className={styles.loader}
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={500} 
      /> );
}
 
export default LoaderComponent;

