import Image from 'next/image';
export default function Footer() {
    return(
        <div className='w-[1920px] flex h-[561px] px-[220px] py-[140px] bg-[#043873] gap-[200px]'>
            <div className='flex w-[1480px] h-[289px] gap-[100px] text-white'>
                <div  className='w-[295px] h-[120px] leading-[30px] '>
                    <Image 
                    src='/Logo.png'
                    alt=''
                    width={200}
                    height={30}
                    />
                    <p className='py-5'>Whitepace was created for the new ways we lived and work. We make a better workspace around the world</p>
                </div>
                <div className='w-[295px] h-[120px] leading-[30px]'>
                    <b><p>Product</p></b>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Customer Stories</p>
                </div>
                <div className='w-[295px] h-[120px] leading-[30px]'>
                    <b><p>Resources</p></b>
                    <p>Blog</p>
                    <p>Guides & tutorials</p>
                    <p>Help center</p>
                </div>
                <div className='w-[295px] h-[120px] leading-[30px]'>

                    <b><p>Company</p></b>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Media Kit</p>
                </div>
            </div>
        </div>
    )
}