import Image from 'next/image'
import Link from 'next/link';
const Main = () => {
    return (
      <div className="flex-1 flex-col bg-white min-h-screen pl-10 pt-8">
        <div className="flex justify-between">
        <h1 className="mb-3 font-normal text-gray-700 text-4xl">Home</h1>
        <Image
                  src="/home.2.png"
                  alt="check"
                  width={200}
                  height={25}
                  

                />
        </div>
        
        <div className=" flex pl-2 items-center bg-custom-gray-blue h-[50px] rounded-lg "> 
       
        <Image
        src="/home.png"
        alt="Idek bro"
        width={30}
        height={30}
      />

        <p className="font-bold ml-3 mr-5">Find what you need faster</p>
        <p>Home is your new landing page and surfaces your most relevant files and folders</p>
        
        </div>
        <div className="flex mt-3  ml-3 flex-row items-center">
          <p className=" font-bold mr-5 ">Suggested</p>
          <div className="flex items-center w-[125px] h-[33px] bg-light-blue rounded-l-full border border-black pl-3">
              <Image
                  src="/check.png"
                  alt="check"
                  width={25}
                  height={25}
                  

                />
            <p className="ml-7">Files</p> 
          </div>
          <div className="flex items-center w-[125px] h-[33px] bg-white rounded-r-full border border-black pl-3 mr-5">
              <Image
                  src="/folder.png"
                  alt="folder"
                  width={25}
                  height={25}
                  

                />
            <p className="ml-4">Folders</p> 
          </div >
          <div className="flex items-center w-[100px] h-[33px] bg-white rounded-md border border-black pl-3 mr-2">
          <p className=" mr-4">Type</p> 
          <Image
                  src="/ddown.png"
                  alt="folder"
                  width={25}
                  height={25}
                  

                />
          </div>
          <div className="flex items-center w-[110px] h-[33px] bg-white rounded-md border border-black pl-3 mr-2">
          <p className=" mr-4">People</p> 
          <Image
                  src="/ddown.png"
                  alt="folder"
                  width={25}
                  height={25}
                  

                />
          </div>
          <div className="flex items-center w-[120px] h-[33px] bg-white rounded-md border border-black pl-3 mr-2">
          <p className=" mr-4">Modified</p> 
          <Image
                  src="/ddown.png"
                  alt="folder"
                  width={25}
                  height={25}
                  

                />
          </div>
          <div className="flex items-center w-[120px] h-[33px] bg-white rounded-md border border-black pl-3 mr-2">
          <p className="mr-4">Location</p> 
          <Image
                  src="/ddown.png"
                  alt="folder"
                  width={25}
                  height={25}
                  

                />
          </div>
        </div>
        <div className="flex mt-6 border border-blue-500 flex-col w-[275px] bg-docs items-center justify-center rounded-lg">
          <div className="flex mt-2 mr-3 mb-6 pl-3 items-center">
          <Image
                  src="/docs.png"
                  alt="folder"
                  width={30}
                  height={30}
                  

                />
            <Link href="/docs"> <p className="mr-9 ml-3 text-gray-800 font-semibold text-sm">Pushing (P)ymetrics</p> </Link>
           
           <Image
                  src="/tdots.png"
                  alt="folder"
                  width={20}
                  height={20}
                  

                />
          </div>
          
      <Image
        src="/docs.2.png"
        alt="folder"
        width={250}
        height={200}
      />
      <div className="mt-2 mb-2">
      <Image
        src="/home.3.png"
        alt="folder"
        width={250}
        height={200}
      />
      </div>
   
  </div>
          
      
  
      </div>

    );
  };
  
  export default Main;