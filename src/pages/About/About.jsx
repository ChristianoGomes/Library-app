import React from "react";
import "./About.css";
import bookwhite from "/Users/christianogomes/Portofolio projects/Book-Search/house-of-wisdom/src/Images/bookwhite.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={bookwhite} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About House of Wisdom</h2>
            <p className="fs-17">
              "House of Wisdom" is a web application designed to help users
              discover and search for books from a vast database. Leveraging
              React, React Router, CSS, and API integration, this project
              showcases my ability to create a responsive and interactive user
              interface for exploring and managing a database of books.
            </p>
            <div className="fs-17">
              <p className="fw-7 fs-20">Key features</p>
              <ol>
                <li>
                  Book Search: Implement a search feature allowing users to
                  search for books by title, author, or genre. Utilize the React
                  Router to dynamically update the URL based on the search
                  query.
                </li>
                <li>
                  Book Details: Upon selecting a book from the search results,
                  display detailed information such as the book title, author,
                  publication date, and a brief description.
                </li>
                <li>
                  CSS Styling: Apply CSS to create an aesthetically pleasing and
                  user-friendly design. Ensure the responsiveness of the
                  application, making it accessible on various devices and
                  screen sizes.
                </li>
                <li>
                  API Integration: Connect to a public book API to fetch book
                  data. Handle API requests and responses in a React component,
                  demonstrating effective data management.
                </li>
                <li>
                  Error Handling: Implement error handling for scenarios such as
                  unsuccessful API requests or no search results. Provide
                  meaningful error messages to guide users in case of issues.
                </li>
                <li>
                  Navigation: Utilize React Router to create a smooth navigation
                  experience. Implement a navigation bar or menu to easily
                  switch between different sections of the application.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
