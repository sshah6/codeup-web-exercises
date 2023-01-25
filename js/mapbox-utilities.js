//Initial map center on page load with a marker
let accessToken = keys.mapbox
mapboxgl.accessToken = keys.mapbox
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 11.5,
  center: [-98.5234, 29.5349],
})
makeMarker(-98.5234, 29.5349)


//Geocode utilities
function geocode(search, token) {
  var baseUrl = 'https://api.mapbox.com'
  var endPoint = '/geocoding/v5/mapbox.places/'
  return fetch(
    baseUrl +
      endPoint +
      encodeURIComponent(search) +
      '.json' +
      '?' +
      'access_token=' +
      token,
  )
    .then(function (res) {
      return res.json()
      // to get all the data from the request, comment out the following three lines...
    })
    .then(function (data) {
      return data.features[0].center
    })
}
