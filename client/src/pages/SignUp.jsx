import { stringify } from 'postcss';
import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,}
    )
    console.log(formData)

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const res= await fetch('api/auth/signup',
      {
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success === false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto font-bold'>
      <h1 className='text-3xl text-center my-7 mt-20'>Sign up an account</h1>
      <form className='flex flex-col gap-5 justify-center p-12 border rounded-md bg-white shadow-lg' onSubmit={handleSubmit}>
        <input className='border rounded-lg p-2 shadow-md' type='text' placeholder='Username' id='username' onChange={handleChange}/>
        <input className='border rounded-lg p-2 shadow-md' type='email' placeholder='Email' id='email' onChange={handleChange}/>
        <input className='border rounded-lg p-2 shadow-md' type='password' placeholder='Password' id='password' onChange={handleChange}/>
        {error && <p className='text-red-600'>{error}</p>}
        <button disabled={loading} className='border rounded-lg p-2 bg-blue-700 text-white shadow-md'>{loading ? 'Loading...':'Sign Up'}</button>
      </form>
      <div className='flex gap-4 justify-center my-3'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}><span className='text-blue-700'>Sign In</span></Link>
      </div>
    </div>
  )
}
