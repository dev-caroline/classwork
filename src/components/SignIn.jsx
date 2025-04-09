import React from 'react'

const SignIn = () => {
    return (
        <div className=' col-7 mx-auto border border-5 border-light p-3 mt-5 rounded-4' style={{ height: '50vh' }}>
            <h1 className='text-center mt-3'>Create your account</h1>
            <input type="text" className='form-control mt-5 border border-dark' placeholder='Email' />
            <input type="text" className='form-control mt-4 border border-dark' placeholder='Password' />
            <div className='d-flex justify-content-end mt-3'>
                <button className='btn bg-dark text-light fw-bold px-4'>Create!</button>
            </div>
        </div>
    )
}

export default SignIn