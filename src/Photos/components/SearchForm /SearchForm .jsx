import React, {useState} from 'react';
import styles from './SearchForm.module.css'


export default function SearchForm({onSubmit}) {
  const [query, setQuery] = useState('')

  const handleChange = (evt) => setQuery(evt.target.value);
  

 const handleSubmit = (evt) => {
    evt.preventDefault();
   onSubmit(query);

    setQuery('')
 }
  
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={styles.SearchForm_button}>
     <span className={styles.SearchForm_button_label}>Search</span>
    </button>

      <input
      onChange={handleChange}
      name="query"
      value={query}
      className={styles.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
)
}


    

  


