import React from 'react'
import { useGlobalContext } from '../../context'
import Loader from '../Loader/Loader'
import Cover_not_found from '../../Images/Cover_not_found.jpg'
import "./Booklist.css"
import Book from '../Booklist/Book'



// https://covers.openlibrary.org/b/id/240727-S.jpg


const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : Cover_not_found
    }
  });

 

  if(loading) return <Loader />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList