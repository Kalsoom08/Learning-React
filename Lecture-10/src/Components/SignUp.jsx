// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUser } from '../Slices/userSlice';

// const SignUp = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.userInfo); // Corrected
//   console.log(user.userInfo);

//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userData.name && userData.email && userData.password) {
//       dispatch(addUser(userData));
//       console.log(userData);
//     } else {
//       console.error('All fields are required');
//     }
//     setUserData({ name: '', email: '', password: '' });
//   };

  
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <form
//           onSubmit={handleSubmit}
//           className="w-[30rem] flex flex-col p-5 rounded-lg border-black bg-cyan-700 text-black gap-3"
//         >
//           <div className="flex flex-col gap-2">
//             <label htmlFor="name">Name:</label>
//             <input
//               name="name"
//               type="text"
//               value={userData.name}
//               onChange={handleChange}
//               className="focus:outline-none border border-black px-2 py-1 rounded-lg"
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label htmlFor="email">Email:</label>
//             <input
//               name="email"
//               type="email"
//               value={userData.email}
//               onChange={handleChange}
//               className="focus:outline-none border border-black px-2 py-1 rounded-lg"
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label htmlFor="password">Password:</label>
//             <input
//               name="password"
//               type="password"
//               value={userData.password}
//               onChange={handleChange}
//               className="focus:outline-none border border-black px-2 py-1 rounded-lg"
//             />
//           </div>

//           <button className="border p-2 rounded-lg">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.email && userData.password) {
      dispatch(addUser(userData));
      setUserData({ name: '', email: '', password: '' }); 
    } else {
      console.error('All fields are required');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-[30rem] flex flex-col p-5 rounded-lg border-black bg-[#99B898] text-black gap-3"
        >
          <div className="flex flex-col gap-2">
            <label className='text-black'
             htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
              className="focus:outline-none border border-black px-2 py-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-black'
            htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              className="focus:outline-none border border-black px-2 py-1 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-black'
            htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              className="focus:outline-none border border-black px-2 py-1 rounded-lg"
            />
          </div>

          <button className="border  font-semibold p-2 rounded-lg">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


