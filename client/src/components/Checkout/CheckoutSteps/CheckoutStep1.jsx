import {useForm} from "react-hook-form";
import httpAgent from "../../../api/httpAgent";
import router from "next/router";
import {useAppDispatch} from "../../../store/ConfigureStore";
import {clearBasket} from "../../Cart/CartSlice";
import {ToastContainer} from "react-toastify";


export const CheckoutStep1 = ({ onNext }) => {

  const {register,handleSubmit,setError,formState:{isSubmitting,errors,isValid}} = useForm({});
  const dispatch=useAppDispatch()


  return (
    <>
      <ToastContainer/>
      <div className='checkout-form'>
        <form method='post'
              onSubmit={handleSubmit(
                  (shippingAdress) =>
                      httpAgent.Order.create({saveAddress:true,shippingAdress}).then(()=>{
                        dispatch(clearBasket())
                      }).catch(error => (error))
                      )}
           >

          <div className='checkout-form__item'>
            <h4>Delivery Info</h4>

            <div className='box-field'>
              <input
                  type='text'
                  className='form-control'
                  placeholder='Country'
                  {...register('country')}
             />
            </div>
            <div className='box-field'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='FullName'
                  {...register('fullName')}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter the address 1'
                  {...register('adress1')}
                />
              </div>
              <div className='box-field'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter the address 2'
                    {...register('adress2')}
                />
              </div>
            </div>

            <div className='box-field'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='City'
                  {...register('city')}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='State'
                  {...register('state')}
                />
              </div>
              <div className='box-field'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='ZIP Code'
                    {...register('zip')}
                />
              </div>



            </div>
          </div>

          <div className='checkout-buttons'>
            <button type="submit"  className='btn btn-icon btn-next'>
              next <i className='icon-arrow'/>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
