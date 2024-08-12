class AppUrl
{
    static baseUrl = "http://127.0.0.1:8000";
    static apiUrl  = "http://127.0.0.1:8000/api";

    // client 
    static login    = this.apiUrl + "/client/login";
    static register = this.apiUrl + "/client/register";
    static logout   = this.apiUrl + "/client/logout";
    static check    = this.apiUrl + "/client/check";
    static profile  = this.apiUrl + "/client/profile";

}

export default AppUrl;