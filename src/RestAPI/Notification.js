
import Swal from "sweetalert2";

class Notification { 
    static success = (result) => { 
        return Swal.fire({
            icon  : "success",
            title : result.title,
            text  : result.message,
            confirmButtonText : "Tamam"

        })
    }

    static error = (result) => { 
        return Swal.fire({
            icon  : "error",
            title : result.title,
            text  : result.message,
            confirmButtonText : "Tamam"

        })
    }
}

export default Notification;