import Image from "next/image";


export const Feature5 = () => (
  <div className="w-full py-2 lg:py-4">
    <div className="container mx-auto">
      <div className="flex flex-col gap-2">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <div className="rounded-md bg-muted ">
               <Image 
               src={'/image/laptops-category.png'}
               alt="device"
               width={300}
               height={300}
               />
            </div>
            <h3 className="text-xl text-center">Laptop & Computer</h3>
            
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md  mb-2">
            <Image 
               src={'/image/ipads-category.png'}
               alt="device"
               width={300}
               height={300}
               />
            </div>
            <h3 className="text-xl tracking-tight text-center">Ipads</h3>
            
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
            <Image 
               src={'/image/watches-category.png'}
               alt="device"
               width={300}
               height={300}
               />
            </div>
            <h3 className="text-xl tracking-tight text-center">Watch</h3>
           
          </div>
       
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
            <Image 
               src={'/image/phones-category.png'}
               alt="device"
               width={300}
               height={300}
               />
            </div>
            <h3 className="text-xl tracking-tight text-center">Iphone</h3>
           
          </div>
        </div>
      </div>
    </div>
  </div>
);