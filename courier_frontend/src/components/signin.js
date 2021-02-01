import React from 'react'

export default function Signin() {
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
                <form action="#" method="post">
                  <div class="form-group first">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username"/>
    
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"/>
                    
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
