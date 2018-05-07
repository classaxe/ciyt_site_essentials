// Google Map Custom Marker Maker 2012
// Please include the following credit in your code

// Sample custom marker code created with Google Map Custom Marker Maker
// http://powerhut.co.uk/googlemaps/custom_markers.php
var ministerium = {}

ministerium.image = new google.maps.MarkerImage(
  'marker-images/image.png',
  new google.maps.Size(40,40),
  new google.maps.Point(0,0),
  new google.maps.Point(20,40)
);

ministerium.shadow = new google.maps.MarkerImage(
  'marker-images/shadow.png',
  new google.maps.Size(52,22),
  new google.maps.Point(0,0),
  new google.maps.Point(26,22)
);

ministerium.shape = {
  coord: [
    19,39, 13,28, 0,19, 0,16, 2,10, 6,2, 9,6, 17,6, 18,1, 19,0,
    20,1, 20,4, 25,4, 27,6, 28,3, 29,2, 30,3, 30,6, 35,6,
    37,8, 39,16, 39,19, 26,28, 20,39, 19,39
  ],
  type: 'poly'
};