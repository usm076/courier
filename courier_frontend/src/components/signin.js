import React, {useState} from 'react'
import axios from 'axios';

export default function Signin() {

  const [state, setState] = useState({
		
		email: '',
		pass: ''
		
    });

    const [result, setResult] = useState(null);

    const handleSubmit = event =>{
      event.preventDefault();
      axios.post('http://localhost:9000/api/login', {...state}).then((response)=>{
        console.log(response);
      localStorage.setItem('auth-token', response.data.token);
      window.location.href = '/';
      }).catch((error)=>{
        console.log(error);
      })

    }


  const onInputChange = event => {
    const { name, value } = event.target;
  
    setState({
      ...state,
      [name]: value
    });
    };
    return (
        <div class="d-lg-flex half p-3">
    
        <div class="bg order-1 order-md-1" ></div>
        <div class="contents order-2 order-md-2">
    
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <div class="mb-4">
                  <h3>Sign In</h3>
                  <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="form-group first">
                  
                    <input type="text" placeholder="Email" class="form-control" name="email" onChange={onInputChange}  value={state.email} required/>
    
                  </div>
                  <div class="form-group last mb-3">
                    
                    <input type="password" placeholder="Password" class="form-control" id="password" name="pass" onChange={onInputChange}  value={state.pass} required/>
                    
                  </div>
                  
                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
                  </div>
    
                  <input type="submit" value="Log In" class="btn btn-block btn-primary"/>
    
                  
                  
                
                </form>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
    )
}
