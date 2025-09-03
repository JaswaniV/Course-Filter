import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card=(props)=>{
    let likedcourses=props.likedcourses;
    let setLikedcourses=props.setLikedcourses;
    // liked courses
    function clickHandler(){
    //logic
    if(likedcourses.includes(course.id)){
        //pehel se like hua pada tha
        setLikedcourses((prev)=> prev.filter((cid)=>(cid !=course.id)));
        toast.warning("like removed");
        
    }
    else{
        //pehle se like nahi hai ye course
        //insert karna h ye course liked course me 
        if(likedcourses.length==0){
            setLikedcourses([course.id]);
        }
        else{
            //non-empty pehele se
            setLikedcourses((prev)=>[...prev ,course.id]);
        }
        toast.success("liked successfullt");
    }

    }
    let course=props.course;
    return(
        <div  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full max-w-sm">
            <div className="relative">
                <img  className="w-full h-40 object-cover" src={course.image.url}></img>

        <div>
            <button onClick={clickHandler} className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition">
                {
                    !likedcourses.includes(course.id)?
                    (<FcLikePlaceholder className="text-xl"/>):
                    (<FcLike className="text-xl"/>)
                }
                
            </button>
        </div>

            </div>
            <div  className="p-4">
                <p className="text-lg font-semibold mb-2">{course.title}</p>
                <p className="text-gray-600 text-sm line-clamp-3">
                    {/* {course.description} */}
                    {
                        course.description.length>100 ?
                        (course.description.substr(0,100))+"...":
                        (course.description)
                    }
                    </p>
            </div>
        </div>
    );
}
export default Card;