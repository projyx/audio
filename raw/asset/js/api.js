window.api = {};

window.api.oauth = {};
window.api.oauth.config = {
    client_id: 0 > 1 ? "" : "ed63f2ffe8929b18142d",
    redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
    scope: "delete_repo,user,public_repo,repo"
}
window.api.oauth.login = function(target) {
    var client_id = api.oauth.config.client_id;
    var redirect_uri = api.oauth.config.redirect_uri;

    var scope = api.oauth.config.scope;
    var state = 'github_' + Crypto.uid.create(1);
    var obj = {
        client_id,
        scope,
        state,
        redirect_uri
    }
    var query = new URLSearchParams(obj).toString();

    var a = document.createElement('a');
    var href = "https://github.com/login/oauth/authorize?" + query;
    a.href = href;
    a.click();
    console.log(534, "mvc.js", {
        href,
        obj,
        query
    });
}


window.api.time = {};
api.time.date = (previous)=>{
    var date = Date.now();
    var current = date;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
}