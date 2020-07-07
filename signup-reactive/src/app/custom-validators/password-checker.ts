import { FormGroup } from '@angular/forms';

//in case of class extends formgroup
// class PasswordChecke extends FormGroup (){}

// instead of controlName we can use password and confirm pass 
//to make it more generic we used this
export function PasswordChecker( controlName : string, CompareControlName: string){
   
  return(formGroup : FormGroup) => {
    //formGroup.controls[] ===> used to fetch the details from the
    //values passed in the parameter 
    const password = formGroup.controls[controlName];
    const confPass = formGroup.controls[CompareControlName];

    if (password.value !== confPass.value) {
      confPass.setErrors({mustMatch: true});
      
    } else {
      confPass.setErrors(null);
    }

  };
}