export  default function validateFormInfo(values) {
    let errors = {};
    if (!values.email.trim()) {
        errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Please provide a valid e-mail address'
    } else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@domain.com$/){
        errors.email = 'We are not accepting subscriptions from Colombia emails'
    }
    if(!values.checkbox.checked){
        errors.checkbox = 'You must accept the terms and conditions'
    }


    return errors;
}
