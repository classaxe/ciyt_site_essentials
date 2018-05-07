// Google Map Custom Marker Maker 2012
// Please include the following credit in your code

// Sample custom marker code created with Google Map Custom Marker Maker
// http://powerhut.co.uk/googlemaps/custom_markers.php
var organisation = {}

organisation.image = new google.maps.MarkerImage(
  'marker-images/image.png',
  new google.maps.Size(40,29),
  new google.maps.Point(0,0),
  new google.maps.Point(20,29)
);

organisation.shadow = new google.maps.MarkerImage(
  'marker-images/shadow.png',
  new google.maps.Size(58,29),
  new google.maps.Point(0,0),
  new google.maps.Point(20,29)
);

organisation.shape = {
  coord: [
    24,0,26,1,27,2,28,3,29,4,29,5,29,6,29,7,30,8,32,9,31,10,31,11,31,12,31,13,31,
    14,31,15,30,16,31,17,31,18,34,19,37,20,38,21,39,22,39,23,38,24,36,25,34,26,
    32,27,26,28,6,28,2,27,1,26,0,25,0,24,0,23,1,22,2,21,4,20,5,19,6,18,6,17,6,16,
    6,15,4,14,3,13,3,12,3,11,3,10,3,9,3,8,3,7,4,6,5,5,5,4,5,3,5,2,15,1,24,0,24,0
  ],
  type: 'poly'
};