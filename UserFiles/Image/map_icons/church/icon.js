// Google Map Custom Marker Maker 2012
// Please include the following credit in your code

// Sample custom marker code created with Google Map Custom Marker Maker
// http://powerhut.co.uk/googlemaps/custom_markers.php
var church = {}

church.image = new google.maps.MarkerImage(
  'marker-images/image.png',
  new google.maps.Size(26,28),
  new google.maps.Point(0,0),
  new google.maps.Point(13,28)
);

church.shadow = new google.maps.MarkerImage(
  'marker-images/shadow.png',
  new google.maps.Size(44,28),
  new google.maps.Point(0,0),
  new google.maps.Point(13,28)
);

church.shape = {
  coord: [
    8,0,8,1,10,2,8,3,8,4,8,5,9,6,10,7,10,8,20,9,21,10,22,11,23,12,24,13,25,14,24,
    15,23,16,23,17,23,18,23,19,23,20,23,21,23,22,22,23,19,24,16,25,13,26,8,27,2,
    27,2,26,2,25,2,24,1,23,2,22,2,21,2,20,2,19,2,18,1,17,1,16,2,15,3,14,4,13,5,
    12,6,11,6,10,6,9,6,8,6,7,7,6,8,5,8,4,8,3,6,2,8,1,8,0,8,0
  ],
  type: 'poly'
};