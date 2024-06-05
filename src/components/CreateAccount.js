import React, { useState } from 'react'; 


    
    

const CreateAccount=()=>
    {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
          if (password.length < 6) {
            setError('Error Message');
          } else {
            setError('');
          }
        };
    return(
            <div className=' w-full px-6 py-8 bg-white rounded-[20px] shadow flex flex-col justify-start gap-5'>
               <h1 className='font-bold text-[#1F81B9] text-xl text-center '>Create Account</h1>
               <h2 className='text-center text-zinc-800 text-[15px] '>Create your account in a second to receive our latest news!</h2>
               <form className='flex flex-col gap-5 text-[15px]' onSubmit={handleSubmit}>
               <div className='flex flex-col '>
                    <label className='font-medium '>Email</label>
                    <input  className="w-full px-3 py-2 mt-2 border rounded-lg"
                    label="Email" 
                    type="email" 
                    placeholder='Email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                     required/>
                </div>
               <div className='flex flex-col '>
               
                 <div className='flex items-center justify-between' ><label className='font-medium'>Password</label> <h1 className='text-[#AAAAAA] italic'>At least 6 characters</h1></div>
                    <input  className={`w-full px-3 py-2 my-2 border rounded-lg ${error ? 'border-[#D44848]' : 'border-gray-300'}`}
                    label="Password"
                    type="password"  
                    placeholder='Password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    />
                    {error && 
                    <div className='flex  gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D44848" className="size-5 pt-1">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#D44848] font-medium">{error}</p><a href="#" class="font-medium text-[#E59191] underline">Learn more</a>

                    </div>}
                </div>
               <div className='flex flex-col '>
               
                   <label className='font-medium'>Year of experience</label>
                   <select className='border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                   required>
                    <option value="1-2">0-1</option>
                    <option value="2-4">2-4</option>
                    <option value="5-7">5-7</option>
                    <option value="8-10">8-10</option>
                    <option value="+10">+10</option>
                    
                   </select>
                   

                </div>
                <div >
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Remember Me</span>
                  </label>
                </div>
                <button type="submit" className="w-full bg-[#1F81B9] text-white py-2 rounded">Create Account</button>

               </form>
            </div>
        );
           

        
    }
export default CreateAccount