import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
const Login = () => {

    const captchaRef = useRef();
    const [desable, setdesable] = useState(true)

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; 

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        navigate(from, {replace: true});
    }
    useEffect(()=> {
        loadCaptchaEnginge(6);
    },[]);

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setdesable(false)
        }
   
        else {
            toast('Captcha Does Not Match');
            setdesable(true)
        }
    }
  return (
    <div className="hero bg-base-200 py-24">
      <div className="hero-content justify-center items-center gap-12 md:gap-20 flex-col-reverse md:flex-row">
        <div className="">
          <img style={{height: "500px"}} className='rounded-lg' src="https://i.postimg.cc/6pyyNFpK/6300830.jpg" alt="" />
        </div>
        <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                ref={captchaRef}
                type="text"
                name='captcha'
                placeholder="captcha"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={desable} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='text-center'>New Here?<Link className='text-orange-400 font-bold' to='/signup'> Register Please</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
