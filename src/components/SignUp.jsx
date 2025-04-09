import React, { useState } from 'react'

const SignUp = () => {
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [AllInfo, setAllInfo] = useState([])
    const info = {firstName, lastName, email, password}

    const create = ()=>{
        if(firstName === ''|| lastName === ''|| email === '' || password === ''){
            alert('please fill it up')
        }else{
            setAllInfo([...AllInfo, info])
            console.log(AllInfo);
            localStorage.setItem('data', JSON.stringify(AllInfo)||[])
        }
    }

    return (
        <div className=' col-7 mx-auto border border-5 border-light p-3 mt-5 rounded-4' style={{height: '50vh'}}>
            <h1 className='text-center mt-3'>Create your account</h1>
            <input type="text" className='form-control mt-5 border border-dark' placeholder='First Name' value={firstName} onChange={(e)=>setFirst(e.target.value)}/>
            <input type="text" className='form-control mt-3 border border-dark' placeholder='Last Name' value={lastName} onChange={(e)=> setLast(e.target.value)}/>
            <input type="text" className='form-control mt-3 border border-dark' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" className='form-control mt-3 border border-dark' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className='d-flex justify-content-end mt-3'>
                <button className='btn bg-dark text-light fw-bold px-4' onClick={create}>Create!</button>
            </div>
        </div>
    )
}

export default SignUp