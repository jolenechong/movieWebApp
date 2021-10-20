import '../Forms.css'

export default function Login() {
    return (
        <>
        <section className='formContain'>
            <div>
                <h1>Login</h1>
                <form>
                        <label for="email">Email Address</label>
                        <input type='email' id='email' name='email' required/>
                        <label for="password1">Password</label>
                        <input type='password' id='password' name='password' required/>
                        <button type='submit'>Login</button>
                </form> 
            </div>
        </section>
        </>
    )
}
