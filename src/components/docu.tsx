import Image from 'next/image'
const Docu = () => {
    return (
        <div className="flex bg-docolor">
  <div className="flex"> {/* Set a fixed width and full height */}
    <Image
      src="/ruler.2.png"
      alt="ruler"
      width= {20}
      height={10}
    />
    <div className="mt-5 ml-4">
    <Image
      src="/docdots.png"
      alt="ruler"
      width= {40}
      height={30}
    />
    
    </div>
  </div>
  <div className="flex-1 flex mr-40 bg-white ml-20 mt-4 border border-gray-300 justify-center pt-40">
        <p className="p-4  bold">Pushing (P)ymetrics</p>
      </div>
</div>
    );
  };
  
  export default Docu;