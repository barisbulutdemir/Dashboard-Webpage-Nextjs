import Progres from "@/companents/HomePage/Progres";
import Projects from "@/companents/HomePage/Projects";
import Tasks from "@/companents/HomePage/Tasks";
import Teams from "@/companents/HomePage/Teams";

export default function Home() {
  return (
    <>
       <div className=" mx-5">
          <div className="flex flex-col">
            <Teams />
            <div className="flex justify-between space-x-5"> 
              <div className="basis-1/2"><Progres /></div>
              
              <div className="flex flex-col basis-1/2"> 

                <Projects  />
                <Tasks />
              </div>
             
            </div>
            
          </div>
      </div>
    </>
  )
}
