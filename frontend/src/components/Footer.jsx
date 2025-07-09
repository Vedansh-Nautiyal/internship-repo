// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           <img className='mb-5 w-40' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>greatstackdev@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-white rounded-lg shadow-lg mt-40'>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-14 px-6 md:px-12 text-sm'>

        {/* About Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Mindmend Logo" />
          <p className='w-full md:w-4/5 text-gray-700 leading-6'>
            At <span className="font-semibold text-[#8b82e2]">Mindmend</span>, we aim to make mental healthcare accessible and stigma-free. 
            Our platform connects you with experienced professionals for therapy, counseling, and emotional well-being.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-semibold text-[#8b82e2] mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-700'>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>Home</li>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>About Us</li>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>Mental Health Services</li>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-semibold text-[#8b82e2] mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-700'>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>+1-212-456-7890</li>
            <li className='hover:text-[#8b82e2] transition-all cursor-pointer'>support@mindmend.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-300 px-6 md:px-12'>
        <p className='py-5 text-sm text-center text-gray-600'>
          © 2024 <span className='text-[#8b82e2] font-medium'>Mindmend.com</span> — All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
