
const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");            /*Getting the values*/
const cpassword=document.getElementById("confirm-password");
const button=document.querySelector(".btn-3");


form.addEventListener('submit', (e)=>{   
    if(!initApp()){
        e.preventDefault();  
    }                                             /*check the submit btn*/
})

function initApp(){
      const usernameval=username.value.trim();
      const emailval=email.value.trim();             
      const passwordval=password.value.trim();        /*used to trim unwanted space*/
      const cpasswordval=cpassword.value.trim();
       let success=true;

     
    /*Validation*/
      if(usernameval===''){
        success=false;
        setError(username,'Username is required')
      }
      else{
        setSuccess(username)
      }

      if(emailval===''){
        success=false;
        setError(email,'Email is required')
      }
     else if(!validateEmail(emailval)){
        success=false;
       setError(email,'Please enter a valid email') 
    }
      else{
        setSuccess(email)
    }

    if(passwordval===''){
        success=false;
        setError(password,'Password is required')
    }
    else if(passwordval.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(password)
    }

    if( cpasswordval===''){
        success=false;
        setError(cpassword,'Confirm password is required')
    }

    else if(cpasswordval!==passwordval){
        success=false;
        setError(cpassword,'Confirm password is not as same as password')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

function setError(element,message){
    const inputGroup=element.parentElement;                  /*to identify which element*/
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;

    inputGroup.classList.add('error')
    inputGroup.classList.remove('error')
}

function setSuccess(element){
    const inputGroup=element.parentElement;                  /*to identify which element*/
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText='';

    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')  
}
};
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}
