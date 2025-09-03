import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { apiUrl,filterData } from './data'
import Navbar from './Componets/Navbar'
import Filter from './Componets/Filter'
import Cards from './Componets/Cards'
import { toast } from 'react-toastify'
import Spiner from './Componets/Spiner'
function App() {
  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);
     async function fetchData(){
        setLoading(true);
      try{
        let response=await fetch(apiUrl);
        let output=await response.json();
        // save data into variable
        setCourses(output.data);
        
      }
      catch(error){
        // console.log('error');
        toast.error("something went wrong");
      }
      setLoading(false);
    }
  
   useEffect(()=>{
    fetchData();
   },[]);

  return (
   <div className="min-h-screen flex flex-col bg-blue-300" >
    <div> <Navbar></Navbar></div>
   <div className='bg-blue-300'>
    <div>  <Filter filterData={filterData}
                    category={category}
                    setCategory={setCategory}
    >
      
      </Filter> </div>
   <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[70vh]">
    {
  (loading ? (<Spiner/>):courses===null?(<h1>404 nothung find </h1>):(<Cards courses={courses} category={category}/>))
    }
    
    </div>
   </div>

   </div>
  );
}

export default App
