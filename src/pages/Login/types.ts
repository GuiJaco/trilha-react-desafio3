export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}

export interface IButton {
    disabled: Boolean;
}