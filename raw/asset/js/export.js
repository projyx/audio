function request(resource, options) {
    return new Promise(async function(resolve, reject) {
        await fetch(resource, options).then(async(response)=>{
            //console.log(4, response);
            if (!response.ok) {
                return response.text().then(text=>{
                    var text = JSON.stringify({
                        code: response.status,
                        message: JSON.parse(text)
                    });
                    throw new Error(text);
                }
                )
            }
            return response.text();
        }
        ).then(response=>{
            try {
                response = JSON.parse(response);
                resolve(response);
            } catch (err) {
                resolve(response);
            }
        }
        ).catch(error=>{
            console.log("function_get 404 ERROR", error);
            reject(error);
        }
        )
    }
    );
}

window.Crypto = crypt = cx = {
    uid: {
        create: x=>{
            if (window.crypto || window.msCrypto) {
                var array = new Uint32Array(x);
                window.crypto.getRandomValues(array);
                array.length === 1 ? array = array[0] : null;
                return array;
            } else {
                throw new Error("Your browser can't generate secure random numbers");
            }
        }
    }
};
