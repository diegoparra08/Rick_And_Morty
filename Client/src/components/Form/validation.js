

const validation = (userData, setErrors) => {
    if (!userData.email) setErrors((errors) => ({ ...errors, email: "Please enter a value!" }));
    
    else if (userData.email.length > 35) setErrors((errors) => ({ ...errors, email: "Email exceeded the maximum length!" }));
    
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      setErrors((errors) => ({ ...errors, email: "Email is not valid!" }));
    }
    else{setErrors((errors) => ({ ...errors, email: "" })); }

     if (!userData.password) 
    setErrors((errors) => ({ ...errors, password: "Please enter a value!" }));

     else if (userData.password.length < 6 || userData.password.length > 10) 
    setErrors((errors) => ({ ...errors, password: "Password should have 6-10 characters!" }));
   else if (!/\d/.test(userData.password)) 
    setErrors((errors) => ({ ...errors, password: "Password should have at least 1 number!" }));
  else {
    setErrors((errors) => ({ ...errors, password: "" }));
  }
};
  
  export default validation;

