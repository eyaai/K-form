import React , {useState }from 'react'
const DeleteYourAccount=()=>
    {
        const [reason, setReason] = useState('');
        
        const [error, setError] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (!reason) {
            setError('Please select one of the below reasons.');
          } else {
            setError('');
          }
          
        }
        return(
            <div  className='w-full px-6 py-8 bg-white rounded-[20px] shadow flex flex-col justify-start gap-5' >
               <h1 className='font-bold text-xl text-[#1F81B9] text-center'>Delete Your Account</h1>
               <h2 className='text-[#333333] text-[15px]'>We're sorry to see you go. It would be great if we could know the reason behind.</h2>
               <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-[15px]'>
               {error && 
                    <div className='flex  gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D44848" className="size-5 pt-1">
                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#D44848] font-medium">{error}</p>
                    </div>}
                    <div>
                    <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                value="privacy"
                onChange={(e) => setReason(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2 ">I have privacy concerns.</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                value="not useful"
                onChange={(e) => setReason(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">I no longer find this useful.</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                value="irrelevant emails"
                onChange={(e) => setReason(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">I'm receiving irrelevant email contents.</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                value="too many emails"
                onChange={(e) => setReason(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">I'm getting too many emails.</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="reason"
                value="others"
                onChange={(e) => setReason(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Others</span>
            </label>
          </div>
                    </div>

                <div>
                <label className="block  text-gray-700">Let us know if you've other comments.</label>
          <textarea
            className="w-full px-3 py-2 border my-2 rounded text-grey-50"  placeholder='Your comments (Optional) '
            maxLength="2000"
          /><p className='flex text-[#AAAAAA] justify-end'>Max. 2000 characters</p>
          
                </div>
                
               
                    <button type="submit" className="w-full bg-[#1F81B9] text-white py-2 rounded">Submit</button>
               </form>
            </div>
        );
           

        
    }
export default DeleteYourAccount