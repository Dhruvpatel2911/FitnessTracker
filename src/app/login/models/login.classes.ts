export class UserDetail{
    id: string = "";
    username: string= "";
    email: string="";
    password:string="";
    constructor(init?: UserDetail) {
        if(!!init){
            Object.assign(this);
        }
    }
}