import {getJSON} from '../util';

var base64 = require('base-64');

//
const BASE_URL = {
    TEST:"http://34.230.93.171"
    /*TEST: "http://test.hrms.synerzip.in",
    STAGING: "http://staging.hrms.synerzip.in",
    PROD: "http://hrms.synerzip.in"
*/
};

const SERVICES = {

    CONVERSATION_URL:"/bot/conversation"
   /* LOGIN_URL: "/symfony/web/index.php/api/loginapi",
    DIRECTORY: "/symfony/web/index.php/api/directory"
*/
};

// Login service
export const sendMessage = (text) => new Promise((resolve, reject) => {
    //var encodedusername = base64.encode(userId);
    //var encodedpassword = base64.encode(password);

    var data = {
        "Content-Type": "application/json; charset=UTF-8",
    };

    let bodyData = {
        "user_email_id": "admin@synerzip.com",
        "user_name": "admin",
        "user_reply": "NO",
        "utterance": text
    }

    let request = {
        method: 'POST',
    };
    if (data) {
        request.headers = data;
    }

    if(bodyData){
        request.body = bodyData;
    }

    var URL = BASE_URL.TEST + SERVICES.CONVERSATION_URL;
    fetch(URL, request)
        .then(getJSON)
        .then(response => {
            var {data} = response;
            resolve(response);
        })

        .catch(error => {
            console.log("error");
            reject(error);

        });
})
