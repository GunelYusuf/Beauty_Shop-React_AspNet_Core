import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../store/ConfigureStore";
import {signInUser} from "../Profile/AccountSlice";



export const Login = () => {
  const dispatch = useAppDispatch();
  const {register,handleSubmit,setError,formState:{isSubmitting,errors,isValid}} = useForm({});
async function onSubmitForm(data) {
  try{
     await dispatch(signInUser(data));

     router.push('/')


    console.log(data)
   
  }catch(err){
    console.log(err)
  }
}

  return (
    <>

      <div className='login'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
          >
            <form onSubmit={handleSubmit(onSubmitForm)} method='post'  >
              <h3>log in with</h3>
              <SocialLogin />

              <div className='box-field'>
                <input
                    {...register('email')}
                  type='text'
                  className='form-control'
                  placeholder='Enter your email or nickname'
                />
              </div>
              <div className='box-field'>
                <input
                    {...register('password')}
                  type='password'
                  className='form-control'
                  placeholder='Enter your password'
                />
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'/>
                Remember me
              </label>
              <button  className='btn' type='submit'>
                log in
              </button>
              <div className='login-form__bottom'>
                <span>
                  No account?{' '}
                  <a onClick={() => router.push('/registration')}>
                    Register now
                  </a>
                </span>
                <a href='#'>Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>

    </>
  );
};
