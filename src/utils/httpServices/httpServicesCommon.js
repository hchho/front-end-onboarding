const commonHttpServices = {
    get(url) {
        var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.send(null);
        return req.responseText;
    }
}

export default commonHttpServices