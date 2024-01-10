import * as yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const userSchema = yup.object({
    name:yup.string().max(50).required("please enter name"),
    email:yup.string().email("please enter a valid email").required("please enter email"),
    password:yup.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters").required(),
    password_confirmation:yup.string().oneOf([yup.ref("password")] ,"Confirm Password not matched"),
    phoneNumber:yup.string().min(10, "enter correct phone number").max(10, "maximum 10 digits").matches(phoneRegExp, 'Phone number is required').required(),
    // date: yup.date().required("enter date"),
    city:yup.string().max(20).required("please enter city"),
    state:yup.string().max(20).required("please enter state"),
    gender: yup.string().required("please select gender"),
    college:yup.string().max(50, "maximum 50 characters").required("please enter college name"),
})

export const loginSchema = yup.object({
    email:yup.string().email("please enter a valid email").required("please enter email"),
    password:yup.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters").required(),
})