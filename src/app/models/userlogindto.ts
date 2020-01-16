export class UserLoginDto {
    Status: boolean;
    Message: string;
    Data: {
        UserName: string;
        Password: string;
        NameSurname: string;
        SessionKey: string;
    }
}