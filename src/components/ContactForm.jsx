import { Link } from 'react-router-dom';

export default function ContactForm() {
  return (
    <div className='relative overflow-visible bg-gradient-to-b from-[#5484D6] to-[#334EAC] px-4 py-8'>
      <div className='mx-auto lg:mx-[81px] flex flex-col lg:flex-row items-center justify-center gap-8 max-h-[300px]'>
        {/* left */}
        <div className='w-full lg:w-1/2'>
            <h1 className='text-3xl font-outfit font-bold text-[#fff]'>Explore endless possibilities with Koshpal</h1>
            <p className='text-lg font-jakarta font-normal text-[#fff] mt-4 mb-4'>Explore what money clarity feels like with Koshpal. Manage bills, track shared expenses, and grow smarter with tailored insights and advisory tools — built just for you.</p>
            <Link  to="/demo"
              className='bg-[#334EAC] text-white px-4 py-2 font-outfit mt-4 rounded-full hover:bg-[#5B7FDB] transition-all duration-300 ease-in-out border-2 border-[#fff]'
              style={{color: "#fff", marginTop: '1rem'}}
            >Request a Demo</Link>
        </div>
        {/* right */}
        <div className='hidden lg:flex w-full lg:w-1/2 items-end justify-end'>
            <img src="phone20.png" alt="" className='w-full h-auto object-contain' style={{marginBottom: '1rem'}} />
        </div>

      </div>
    </div>
  );
}


