import Image from 'next/image'

const SearchBar = () => {
  return (
    
    <div className="flex justify-between ml-1 flex-1  ">
       <div className="flex items-center justify-between w-[800px] h-[75px] border bg-custom-gray rounded-full ml-2 pl-10 pr-10">
        <div className="flex items-center"> 
        <div className="mr-5">
          <Image
            src="/search.png"
            alt="Search Icon"
            width={30}
            height={30}
          />
        </div>
        <span className="text-gray-500">Search in drive</span>
      </div>

      
      <Image
        src="/search.2.png"
        alt="Idek bro"
        width={30}
        height={30}
      />
    </div>
    
    <Image
        src="/search.3.png"
        alt="Idek bro"
        width={300}
        height={75}
      />

    
    </div>
    
      
  );
};

export default SearchBar;
