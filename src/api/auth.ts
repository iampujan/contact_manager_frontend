import { api } from ".";

interface SignUpReqBody {
    email: string;
    firstName: string
    lastName: string
    password: string
}
export const signUp = (signUpData: SignUpReqBody) => {
    return api.post('/signUp', signUpData);
}