const Filter=(props)=>{
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
    setCategory(title);
    }
    return(
        <div className="w-11/12 max-w-max mx-auto py-4 flex flex-wrap justify-center items-center gap-4">  
            
            {
           filterData.map((data) => {
  return<button 
   className={`px-4 py-2  text-white rounded-lg shadow-md hover:bg-blue-800 transition
   ${category === data.title ? "bg-amber-800":" bg-blue-500"}` }key={data.id}
   onClick={()=>filterHandler(data.title)}
   >{data.title}</button>
})


            }   
             </div>
    )
}
export default Filter