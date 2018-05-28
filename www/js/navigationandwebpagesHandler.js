var inAppBrowserRef;
var to1;

function checkLocalization(to) {
    navigator.geolocation.getCurrentPosition(onSuccess);
    to1 = to;
}

function onSuccess(position, to) {
    var target = "_blank";
    var options = "location=no,toolbar=no";
    var from = position.coords.latitude+","+ position.coords.longitude;
    var url = "https://www.google.pl/maps/dir/"+from+"/"+to1;

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
 
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
    };

function loadSubjectsPage(page) {
    var target = "_blank";
    var options = "location=no,toolbar=no,zoom=no";
    var url = page;
    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
 
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
    };

function loadPage(page) {
    var target = "_blank";
    var options = "location=yes,hidden=yes";
    var url = page;
    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
 
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
    };
function loadStartCallBack() {
 
    $('#status-message').text("loading please wait ...");
 
}
 
function loadStopCallBack() {
 
    if (inAppBrowserRef != undefined) {
 
        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });
 
        $('#status-message').text("");
 
        inAppBrowserRef.show();
    }
 
}
 
function loadErrorCallBack(params) {
 
    $('#status-message').text("");
 
    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"
 
    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
 
    inAppBrowserRef.close();
 
    inAppBrowserRef = undefined;
 
}
 
function executeScriptCallBack(params) {
 
    if (params[0] == null) {
 
        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }
 
}