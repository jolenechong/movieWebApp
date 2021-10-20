import '../Forms.css'

export default function SignUp() {
    return (
        <>
        <section className='formContain'>
            <div>
                <h1>Sign up</h1>
                <form>
                        <label for="first-name">First Name</label>
                        <input type='text' id='first-name' name='first-name' required/>
                        <label for="email">Email Address</label>
                        <input type='email' id='email' name='email' required/>
                        <label for="password1">Password</label>
                        <input type='password' id='password1' name='password1' required/>
                        <label for="password2">Confirm your password</label>
                        <input type='password' id='password2' name='password2' required/>
                        <button type='submit'>Sign Up</button>
                    </form> 
            </div>
        </section>
        </>
    )
}
