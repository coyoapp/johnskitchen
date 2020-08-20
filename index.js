'use strict';

const src = window.location.search.match(/[?&]src=([^&]*)/)[1]

parent.postMessage(
{
    source: src,
    topic: 'requestData',
    payload: [
    'userName',
    ]
}, "*"
)
window.addEventListener('message', function receiveData(event) {
var message = event.data;
if (message.source === 'coyo:app' && message.topic === 'provideData') {
    var jwt = message.payload;
    var userData = jwt_decode(jwt);
    document.getElementById("userName").textContent = userData.userName;
}
});