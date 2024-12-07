import Image from "next/image";
export default function Navbar() {
    return(
        <div className='px-[100px] py-[16px] bg-[#043873] justify-between w-[1920px] h-[92px] items-center gap-[300px] flex '>
            <div className="w-[191px h-[34px] px-[220px]">
               <Image 
                src="/Logo.png"
                alt="Logo"
                width={191}
                height={34}

               />
            </div>
            <div className='w-[737.5px] justify-between items-center h-[60px] gap-[30px] flex'>
                <div className='text-white gap-3 flex'>
                    <ul className='flex gap-10 font-bold text-lg'>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                    </ul>
                        </div>
                <div className='bg-[#FFE492] items-center text-center w-[126px] h-[60px] gap-6'>
                    <button className='bg-[#FFE492] items-center text-center w-[126px] h-[60px] gap-6'>Login</button>
                </div>
            </div>
        </div>
    )
}