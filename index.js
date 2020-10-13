'use strict';

const src = window.location.search.match(/[?&]src=([^&]*)/)[1]

parent.postMessage(
{
    iss: src,
    sub: 'requestData',
    data: [
        "tenantId",
        "tenantUrl",
        "userId",
        "userName",
        "userEmail",
        "userLanguage"
    ]
}, "*"
)
window.addEventListener('message', function recieveData(event) {
    var jwt = jwt_decode(event.data);
    document.getElementById("tenantId").textContent = jwt["data.tenantId"];
    document.getElementById("tenantUrl").textContent = jwt["data.tenantUrl"];
    document.getElementById("userId").textContent = jwt["data.userId"];
    document.getElementById("userName").textContent = jwt["data.userName"];
    document.getElementById("userEmail").textContent = jwt["data.userEmail"];
    document.getElementById("userLanguage").textContent = jwt["data.userLanguage"];
});