import { useState } from "react";
import Card from "./Card";
const Cards= (props) =>{
    let courses=props.courses;
    let category=props.category;
   const [likedcourses,setLikedcourses]=useState([])
    // return you a list of all courses recieve from the api response 
    function getCourses(){
        if(category=="All"){
            let allCourses=[];
    Object.values(courses).forEach(array=>{
        array.forEach(coursedata=>{
            allCourses.push(coursedata);
        })
    })
    return allCourses;  
        }
        else{
            // console.log(courses[category]);
            return courses[category];

        }
         
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
              {getCourses().map((course) => {
  return <Card key={course.id} course={course} likedcourses={likedcourses} setLikedcourses={setLikedcourses}/>
})}

        </div>
    );
}
export default Cards;