import React from "react";
import SubCourse from "./SubCourse";

function WishList({ wishlist, setWishlist }) {
  return (
    <div className="enrolled w-100 m-3 p-3">
      <h3 className="text-center">Wishlist({wishlist.length})</h3>
      <div className="enrolled-courses">
        {wishlist.map((course) => (
          <SubCourse
            key={course.id}
            course={course}
            wishlist={wishlist}
            setWishlist={setWishlist}
            enrolled="no"
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
