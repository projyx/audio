window.routes = function(uri, options) {
    return new Promise((resolve,reject)=>viewer(resolve, reject));
    async function viewer(resolve, reject) {
        var component = options.component;
        var obj = {};
        var paths = uri.split('/').splice(1);
        var sub = paths[0]
        console.log(5, 'routes.js', {
            options,
            paths,
            uri
        });
        var e = {};
        var status = 200;

        if (sub) {
            console.log("routes.view settings");
        } else {
            console.log(135, 'routes.view home', '/', uri);
        }
        status === 200 ? resolve(uri) : reject(e);
    }
}
