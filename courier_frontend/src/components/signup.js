import React , {useRef, useState} from 'react'

export default function Signup() {
  const axios = require('axios');

  const [state, setState] = useState({
		name : '',
		email: '',
		pass: ''
		
    });

    const [result, setResult] = useState(null);
    

    const  handleSubmit = async event => {
      event.preventDefault();
      // await reRef.current.executeAsync();
      // const captchaToken=reRef.current.getValue();
  
  
      //  const captchaToken = await reRef.current.executeAsync(); 
        //reRef.current.reset();
        //console.log( "Captcha Token :"+captchaToken);
      
      axios
        .post('http://localhost:9000/register', { ...state })
        .then(response => {
          console.log(response);
          if(response.status==200)
          {
          //reRef.current.reset();
           // alert("redirection successfull");
           localStorage.setItem('auth-token', response.data.token);
           window.location.href = "/";	
          }
          else
          {
          //reRef.current.reset();
  
          
          //console.log(response.data[0].msg);
          setResult({
          success: true,
          message: response.data[0].msg
          });
        //setResult(response.data[0].msg);
        setState({
          name : '',
          email: '',
          
          pass: ''
        });
      }
        })
        .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
        });
      };

      const onInputChange = event => {
        const { name, value } = event.target;
      
        setState({
          ...state,
          [name]: value
        });
        };





    return (
        <div class="d-lg-flex half p-3">
    
        <div class="bg order-1 order-md-2" ></div>
        <div class="contents order-2 order-md-1">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <div class="mb-4">
                  <h3>Sign Up</h3>
                  <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                </div>
                {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
                </p>
                )}
                <form onSubmit={handleSubmit} >

                <div class="form-group first">
                    <label for="username">Email</label>
                    <input type="email" class="form-control" name="email" onChange={onInputChange}  value={state.email} required/>
    
                </div>

                  <div class="form-group middle">
                    <label for="username">Name</label>
                    <input type="text" class="form-control" name="name" onChange={onInputChange}  value={state.name} required/>
    
                  </div>

                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="pass" onChange={onInputChange}  value={state.pass} required/>
                    
                  </div>
                  
                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Already have an account? </a></span> 
                  </div>
    
                  <input type="submit" value="Register" class="btn btn-block btn-primary"/>
    
                  
                  
                
                </form>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
