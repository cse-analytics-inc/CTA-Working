var ip = $.cookie("ip");
var socket = io.connect( 'http://www.pshrey.gq' )
// function redir(link){
//   console.log(link);
//   window.location.href = link;
// }
// jQuery(document).ready(function($) {
//     $("#content").click(function() {
//         window.location = $(this).data("href");
//     });
// });
function users() {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
    pc.createDataChannel('');//create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);// create offer and set local description
    pc.onicecandidate = function(ice, ip)
    {
     if (ice && ice.candidate && ice.candidate.candidate)
     {
      ip = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate)[1];
      window.location.href = '/users?ip=' + ip;
    }
    // Clear forms here
    // document.getElementById("file").value = "";
    // val = document.getElementById('ipadd').innerHTML + ip;
    // document.getElementById("ipadd").innerHTML = val;
}
}
