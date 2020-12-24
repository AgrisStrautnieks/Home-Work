import React, {useState} from 'react';
import useForm from "./useForm";
import validateFormInfo from "./validateFormInfo";

const Form = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(validateFormInfo);

    return (
        <div className="form-wrapper">
            <form className="form" id="form" name="form" onSubmit={handleSubmit}>
                            <span className="email-span">
                                 <input
                                     type='email'
                                     name='email'
                                     className="email"
                                     placeholder="Type your email address here…"
                                     value={values.email}
                                     onChange={handleChange}
                                 />
                                 <button type="submit" className="submit"><span className="arrow"/></button>
                                {errors.email && <p>{errors.email}</p>}
                             </span>
                <div className="relative">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                        id="checkbox"
                        value={values.checkbox}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox" className="checkbox-label">I agree to <a href="#" className="terms">terms
                        of service</a></label>
                    {errors.checkbox && <p>{errors.checkbox}</p>}
                </div>
            </form>
        </div>
    )
}

export default Form;
