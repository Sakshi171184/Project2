// Validation
export interface Validatable {
  value: string | number;
  type?:string
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required){
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null &&typeof validatableInput.value === 'string'){
    isValid =isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if ( validatableInput.maxLength != null &&typeof validatableInput.value === 'string' ) {
      isValid =isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null &&typeof validatableInput.value === 'number' ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  if(validatableInput.type != null && validatableInput.type =='email'){
    let phoneRGEX= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        isValid = isValid &&  phoneRGEX.test(validatableInput.value.toString());
  }
  if(validatableInput.type != null && validatableInput.type === 'number'){
    let phoneRGEX =/^\d+$/;
        isValid = isValid && phoneRGEX.test(validatableInput.value.toString());
  }
  if(validatableInput.min != null && validatableInput.type === 'number'){
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
   if(validatableInput.max != null && validatableInput.type === 'number'){
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

