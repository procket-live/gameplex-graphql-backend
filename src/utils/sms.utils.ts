import axios from 'axios'
import querystring from 'querystring';

const authKey = '235391Ae7cMna4J5da79840';

export function sendSMS(mobile, template) {
    const params = {
        mobiles: `91${mobile}`,
        authkey: authKey,
        route: 4,
        sender: "GMPLEX",
        message: encodeURIComponent(template),
        country: 91,
    };

    const query = querystring.stringify(params);

    const options = {
        url: `https://api.msg91.com/api/sendhttp.php?${query}`,
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    };


    axios(options as any);
}

