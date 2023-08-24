var foodTypeEl = document.querySelector('#filter-food-options');
var userLocationEl = document.querySelector('#filter-user-location');
var pricesEl = document.querySelector('#filter-div-prices');
var searchBtnEl = document.querySelector('#search-button');
var favouritesEl = document.querySelector('#favourites-list');
var searchResultsEl = document.querySelector('#search-results');
// google maps places & details api key
var apiKey = 'AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc'


// use place search to get a place_id from a general query, then place details for details on that id
var query = 'indian%20food';
var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + query + '&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc';
var proxyurl = "https://cors-anywhere.herokuapp.com/";
// https://stackoverflow.com/questions/28359730/google-place-api-no-access-control-allow-origin-header-is-present-on-the-req

function placeLocations(url) {
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    // var locations = [];
    fetch(proxyurl + url)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i=0; i<data.length; i++){
                // locations.push(data.results[i].place_id);
                locationDetails(data.results[i].place_id);
            }
            return locations;
        });

}
// placeLocations(url); // for testing above

// can only make basic requests of place details api. Else will be billed
// Basic 'fields=': The Basic category includes the following fields: address_components, adr_address, business_status, formatted_address, geometry, icon, icon_mask_base_uri, icon_background_color, name, permanently_closed (deprecated), photo, place_id, plus_code, type, url, utc_offset, vicinity, wheelchair_accessible_entrance. 
// need to include at least one basic 'fields=' request or it returns all options

// place_id = ChIJD_SfHlk5tokRjbCVXAaBy3A
var idTest = 'ChIJD_SfHlk5tokRjbCVXAaBy3A';
async function locationDetails(id) {
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var locationURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + id + '&fields=formatted_address,business_status,icon,name,type,url,wheelchair_accessible_entrance&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc';
    // does type contain resturant, is the buisness_status=true
    fetch(proxyurl + locationURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var resturant = [data.result.name, data.result.formatted_address, data.result.icon, data.result.wheelchair_accessible_entrance, data.result.business_status, data.result.url];
            if (resturant[3]) {
                resturant[3] = 'Yes';
            } else {
                resturant[3] = 'No';
            }
            console.log('resturant: ' + resturant);
            // print details to the page, with an anchor link and favourite button
            var li = document.createElement('li');
            var btn = document.createElement('button');
            var anchor = document.createElement('a');
            li.textContent = 'Name: ' + resturant[0] + '\n Address: ' + resturant[1] + '\n Wheelchair Accessable: ' + resturant[3] + '\n Business Status: ' + resturant[4] + '    ';
            anchor.textContent = 'Google Maps URL';
            anchor.setAttribute('href', resturant[5]);
            anchor.style.color = 'blue';
            btn.textContent = 'Favourite';
            btn.style.color = 'red';
            searchResultsEl.append(li)
            searchResultsEl.lastChild.appendChild(anchor);
            searchResultsEl.lastChild.appendChild(btn);
        });


}

var test = locationDetails(idTest);
console.log('outside the function' + test);



searchBtnEl.addEventListener('click', function () {
    var searchQuery = $('#search-bar').val();
    // if statements to check the checkboxes
    // if true add to query
    // ethnic food options --------------------------------
    if ($(foodTypeEl).children().eq(1).children().eq(0).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20italian');
    } // italian
    if ($(foodTypeEl).children().eq(1).children().eq(1).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20mexican');
    } // mexican
    if ($(foodTypeEl).children().eq(1).children().eq(2).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20chinese');
    } // chinese
    // price range -----------------------------------------
    if ($(pricesEl).children().eq(1).children().eq(0).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20cheap');
    } // cheap
    if ($(pricesEl).children().eq(1).children().eq(1).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20moderately%20priced');
    } // moderately priced
    if ($(pricesEl).children().eq(1).children().eq(2).children().eq(0).prop('checked')) {
        searchQuery = searchQuery.concat('%20expensive');
    } // expensive

    // alternative location ------------------------------------
    if ($(userLocationEl).children().eq(1).val() != '') {
        var locationTemp = '%20' + $(userLocationEl).children().eq(1).val().replace(' ', '%20');
        searchQuery = searchQuery.concat(locationTemp);
    }
    console.log('final: ' + searchQuery);

    // perform a fetch with user query
    // perform a fetch with location id
    // print details to the page
});


// event listener for liked resturants