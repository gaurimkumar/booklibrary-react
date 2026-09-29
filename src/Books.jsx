import React, { useEffect, useState } from "react";
import "./book.css";


const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookLibrary()
  }, []);


  const bookLibrary=async()=>{
    let apiResponse=await fetch('https://openlibrary.org/search.json?q=javascript&limit=12')
    apiResponse=await apiResponse.json()
    setBooks(apiResponse.docs)
  }



  return (
    <div className="library">
      
      <header className="header">
        <div className="logo">
          Book<span>Library</span>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">Authors</a>
        </nav>
      </header>

<section className="hero">

  <div className="hero-content">

    <p>EXPLORE THE COLLECTION</p>

    <h1>
      Discover Your Next
      <span> Favorite Book</span>
    </h1>

    <h4>
      Browse books fetched directly from the Open Library API.
      Discover new stories, authors and ideas from around the world.
    </h4>

    <button className="hero-btn">
      Explore Books
    </button>

  </div>


  <div className="hero-image">

    <div className="book-glow"></div>

    <div className="hero-book">

      <div className="book-top">
        BOOKVERSE
      </div>

      <div className="book-icon">
        📖
      </div>

      <h2>
        Discover
        <br />
        New Stories
      </h2>

      <p>
        A world of books
      </p>

    </div>

    <div className="floating-book book-one">
      📚
    </div>

    <div className="floating-book book-two">
      ✨
    </div>

  </div>

</section>

      <section className="books-section">

        <div className="section-title">
          <p>BOOK COLLECTION</p>
          <h2>Latest Books</h2>
        </div>


        <div className="book-grid">

          {books.map((book) => (

            <div className="book-card" key={book.key}>

              <div className="book-image">

                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                ) : (
                  <div className="no-image">
                    No Cover
                  </div>
                )}

              </div>


              <div className="book-content">

                <h3>
                  {book.title}
                </h3>

                <p className="author">
                  {book.author_name
                    ? book.author_name[0]
                    : "Unknown Author"}
                </p>

                <div className="details">

                  <span>
                    📅 {book.first_publish_year || "N/A"}
                  </span>

                  <span>
                    📚 {book.edition_count || 0 } Editions
                  </span>

                </div>

                <button>
                  View Book
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <footer className="footer"> 
        <div className="footer-content">
             <div className="footer-about">
                 <div className="footer-logo"> Book
                    
                    <span>Verse</span> </div> 
                    <p> A modern digital library where you can discover books, authors and stories from around the world. </p>
                    
                     </div> 
                <div className="footer-links">
                     <h3> Explore </h3> 
                    
                <a href="#"> Home </a>
                 <a href="#"> Books </a> 
                 <a href="#"> Authors </a> 
                 <a href="#"> Categories </a> 
                 
            </div> 
            <div className="footer-links"> 
                
                <h3> Resources </h3>
                
            <a href="#"> About Us </a>
             <a href="#"> Contact </a> 
             <a href="#"> Privacy </a> 
             <a href="#"> Terms </a> </div> 
             
        <div className="footer-social"> 
            
            <h3> Follow Us </h3> 
            <div className="social-icons">
                 <a href="#">GitHub</a> 
                 <a href="#">LinkedIn</a> 
                 <a href="#">Instagram</a> </div>
                  </div>
                   </div>
             <div className="footer-bottom"> 
                <p> © 2026 BookVerse. All rights reserved. </p> 
                <p> Built with React & Open Library API </p> </div>
                
         </footer>

    </div>
  );
};

export default Books;