
import DocBar from "@/components/docbar";
import Docu from "@/components/docu";
import Image from "next/image";
export default function Docs() {
    return (
      <div bg-docolor>
        <DocBar/>
        <div className="flex flex-col bg-docolor"> </div>
        

          <Docu/>
          
      
      
      <div className="fixed bottom-0 flex-colmin-h-screen right-0"> 
      <div className="">
      </div>
        <div className="flex flex-1 bg-white"> 
        </div>
        <Image
          src="/rbar.png" // Make sure the path is correct
          alt="Descriptive Alt Text"
          width={50} // Set the width you want
          height={10000} // Set the height you want
        />
        
        

        
      </div>
    
   
         </div>
    );
  }
  
