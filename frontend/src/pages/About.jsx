// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//           <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      {/* ---- ABOUT US HEADER ---- */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* ---- ABOUT CONTENT ---- */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Mindmend" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Mindmend, your trusted partner in managing mental healthcare needs conveniently and compassionately. At Mindmend, we understand the emotional challenges individuals face when seeking professional support.</p>
          <p>Mindmend is committed to excellence in mental healthcare technology. We continuously enhance our platform to connect you with experienced psychiatrists and therapists, making your journey toward healing smoother and more accessible.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Mindmend is to break the stigma around mental health and create a seamless care experience. We aim to bridge the gap between individuals and qualified professionals, helping you access the right care at the right time.</p>
        </div>
      </div>

      {/* ---- WHY CHOOSE US HEADER ---- */}
      <div className='text-xl my-4 text-[#707070]'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      {/* ---- FEATURE CARDS ---- */}
      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#8b82e2] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#8b82e2] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of licensed mental health professionals from the comfort of your space.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#8b82e2] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored therapy and wellness plans designed for your unique mental health needs.</p>
        </div>

      </div>

    </div>
  )
}

export default About
