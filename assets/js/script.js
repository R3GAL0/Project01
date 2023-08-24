
// google web search api

var apiKey = 'b8ddaabfe8msha35204713d89a7bp1c84d9jsn7aa75155a376'

// google places api key
// AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=restaurant&name=harbour&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?parameters


// can use place search to get an id, then place details for details on that id

var query = 'indian%20food';
// var url =  'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + query + '&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc'
var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc';
var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + query + '&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc';
        //    https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc
var proxyurl = "https://cors-anywhere.herokuapp.com/";
// https://stackoverflow.com/questions/28359730/google-place-api-no-access-control-allow-origin-header-is-present-on-the-req

function placeLocations(url){
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var locations = [];
    fetch(proxyurl + url)
        .then(function (response){
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

    // for (var i=0; i<data.length; i++){
    //     locations.push(data.results[i].place_id);
    // }
    // return locations;
}
placeLocations(url);

// can only make basic requests of place details api. Else will be billed
// Basic 'fields=': The Basic category includes the following fields: address_components, adr_address, business_status, formatted_address, geometry, icon, icon_mask_base_uri, icon_background_color, name, permanently_closed (deprecated), photo, place_id, plus_code, type, url, utc_offset, vicinity, wheelchair_accessible_entrance. 
// need to include at least one basic 'fields=' request or it returns all options

// place_id = ChIJD_SfHlk5tokRjbCVXAaBy3A
var idTest = 'ChIJD_SfHlk5tokRjbCVXAaBy3A';
function locationDetails (id) {
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var locationURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + id + '&fields=formatted_address&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc';
    fetch(proxyurl + locationURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })


}

locationDetails(idTest);
// 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJD_SfHlk5tokRjbCVXAaBy3A&fields=formatted_address&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc



// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mcdonalds&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc


var foodTypeEl = document.querySelector('#filter-food-options');
var userLocationEl = document.querySelector('#filter-user-location');
var pricesEl = document.querySelector('#filter-div-prices');
var searchBtnEl = document.querySelector('#search-button');

searchBtnEl.addEventListener('click', function (){
    var searchQuery = $('#search-bar').val();
    // if statements to check the checkboxes
    // if true add to query
    // ethnic food options --------------------------------
    if ($(foodTypeEl).children().eq(1).children().eq(0).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20italian');
    } // italian
    if ($(foodTypeEl).children().eq(1).children().eq(1).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20mexican');
    } // mexican
    if ($(foodTypeEl).children().eq(1).children().eq(2).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20chinese');
    } // chinese
    // price range -----------------------------------------
    if ($(pricesEl).children().eq(1).children().eq(0).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20cheap');
    } // cheap
    if ($(pricesEl).children().eq(1).children().eq(1).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20moderately%20priced');
    } // moderately priced
    if ($(pricesEl).children().eq(1).children().eq(2).children().eq(0).prop('checked')){
        searchQuery = searchQuery.concat('%20expensive');
    } // expensive

    // alternative location ------------------------------------
    if ($(userLocationEl).children().eq(1).val() != ''){
        var locationTemp = '%20' + $(userLocationEl).children().eq(1).val().replace(' ', '%20');
        searchQuery = searchQuery.concat(locationTemp);
    }
    console.log('final: ' + searchQuery);

    // perform a fetch with user query
    // perform a fetch with location id
    // print details to the page
});
