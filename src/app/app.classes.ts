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

export class UserDetailJson{
    userDetails: Array<UserDetail> = [];
    constructor(init?: UserDetailJson) {
        if(!!init){
            Object.assign(this);
        }
    }
}

export class LoggedUserDetail{
    id:string="";
    username: string= "";
    isLoggedIn: boolean = false;
}

export class LoggedUserDetailJson{
    loggedInUserDetails: LoggedUserDetail[] = [];
}