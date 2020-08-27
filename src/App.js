import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

import Header from "./components/Header";
import Course from "./components/Course";
import Enrolled from "./components/Enrolled";
import Wishlist from "./components/WishList";

function App() {
  const [courses, setCourses] = useState(data);
  const [query, setQuery] = useState("");
  const [enrolled, setEnrolled] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    let tempData = data.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );
    setCourses(tempData);
  }, [query]);

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} />
      <div className="container">
        <h2 className="text-center my-4">Our Courses</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="row courses">
              {!courses.length && <h2>Sorry!! No courses found.</h2>}
              {courses.map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  enrolled={enrolled}
                  setEnrolled={setEnrolled}
                />
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <Enrolled enrolled={enrolled} setEnrolled={setEnrolled} />
            </div>

            <div className="row">
              <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
