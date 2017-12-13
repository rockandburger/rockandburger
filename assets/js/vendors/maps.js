/*********************************************************************
*  =MAP
*********************************************************************/
var w=window,
    d=document,
    e=d.documentElement,
    g=d.getElementsByTagName('body')[0],
    screen_width=w.innerWidth||e.clientWidth||g.clientWidth,
    screen_height=w.inner

var contentString =
   '<div id="content">'+
       '<div id="siteNotice">'+
           'Rua Hoffmann, 447 <br /> floresta - POA/RS' +
       '</div>'+
   '</div>';
   // console.log(contentString)

var pos = new google.maps.LatLng(-30.029436, -51.214260),
// var map;
map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 16,
    scrollwheel: false,
    draggable: (screen_width > 1024)? true : false,
    disableDefaultUI: true,
});

var infowindow = new google.maps.InfoWindow({
  content: contentString
});
var image = 'assets/img/pin.png';

var pinMarker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: image
});

// console.log(infowindow)
