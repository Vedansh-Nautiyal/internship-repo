// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

//             {/* --------- Header Left --------- */}
//             <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//                 <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                     Book Appointment <br />  With Trusted Doctors
//                 </p>
//                 <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                     <img className='w-28' src={assets.group_profiles} alt="" />
//                     <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//                 </div>
//                 <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                     Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className='md:w-1/2 relative'>
//                 <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Header

import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-[#8b82e2] rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden'>

            {/* --------- Header Left --------- */}
            <div className='md:w-2/5 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight tracking-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p className='text-center md:text-left'>
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href='#speciality'
                    className='flex items-center gap-2 bg-white text-[#4c4c4c] px-8 py-3 rounded-full text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-3/5 relative mt-6 md:mt-0 flex justify-end pr-5'>
                <img
                    className='w-[105%] h-auto md:h-[550px] object-cover object-right rounded-lg'
                    src={assets.header_img}
                    alt="Doctor Booking"
                />
            </div>
        </div>
    )
}

export default Header


