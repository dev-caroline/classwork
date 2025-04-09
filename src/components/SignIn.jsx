import React, { useState } from 'react'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [AllInfo, setAllInfo] = useState('')


    const Login = () => {
        if (email === '' || password === '') {
            alert('Fill it up')
        }
        else {
            const info = JSON.parse(localStorage.getItem("AllInfo") || []);
            console.log(info);

        }
    }
    return (
        <div className=' col-7 mx-auto border border-5 border-light p-3 mt-5 rounded-4' style={{ height: '50vh' }}>
            <h1 className='text-center mt-3'>Create your account</h1>
            <input type="text" className='form-control mt-5 border border-dark' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className='form-control mt-4 border border-dark' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='d-flex justify-content-end mt-3'>
                <button className='btn bg-dark text-light fw-bold px-4' onClick={Login}>Login!</button>
            </div>
        </div>
    )
}

export default SignIn