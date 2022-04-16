import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import {useForm} from "react-hook-form";
import httpAgent from "../../api/httpAgent";

export const Registration = () => {

  const {register,handleSubmit,setError,formState:{isSubmitting,errors,isValid}} = useForm({});

  function handleApiErrors(errors){
    if (errors){
      errors.forEach((error) => {
        if (error.includes('Password')){
          setError('password',{message: error})
        }else if (error.includes('Email')){
          setError('email',{message: error})
        }else if (error.includes('Gender')){
          setError('gender',{message: error})
        }
      });
    }
  }


  return (
    <>
      <div className='login registration'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{
              backgroundImage: `url('/assets/img/registration-form__bg.png')`,
            }}
          >
            <form method='post'
                  onSubmit={handleSubmit(
                      (data) =>
                          httpAgent.Account.register(data).then(()=>{

                            router.push('/login')
                          }).catch(error => handleApiErrors(error)
                          ))}
            >
              <h3>register now</h3>
              <SocialLogin />


              <div className='box-field__row'>

                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                    {...register('email',{
                      required:'Email is required',
                      pattern:{
                        value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                        message: 'Not a valid email address'
                      }
                    })}
                  />
                </div>
              </div>
              <div className='box-field__row'>
                <span>password</span>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter your password'
                    {...register('password',{
                      required:'Password is required',
                      pattern:{
                        value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                        message: 'Password does not meet complexity requirements'
                      }
                    })}
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Confirm password'
                    {...register('password',{
                      required:'Password is required',
                      pattern:{
                        value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                        message: 'Password does not meet complexity requirements'
                      }
                    })}
                  />
                </div>
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'/>
                Remember me
              </label>
              <button className='btn' type='submit'>
                registration
              </button>
              <div className='login-form__bottom'>
                <span>
                  Already have an account?{' '}
                  <a onClick={() => router.push('/login')}>Log in</a>
                </span>
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
