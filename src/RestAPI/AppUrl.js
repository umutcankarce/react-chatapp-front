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
    
    // home
    static home = this.apiUrl + "/home";

    // message 
    static search_receiver = this.apiUrl + "/message/search-receiver";
    static get_messages    = this.apiUrl + "/message/get-messages";
    static send_message    = this.apiUrl + "/message/send-message";
    static update_read     = this.apiUrl + "/message/update-read";
    
}

export default AppUrl;