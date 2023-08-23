

// using serpstack api for guided google searches
// https://serpstack.com/documentation

// https://serpapi.com/google-local-api - don't have a key
// https://serpapi.com/search?access_key=2d5564eefce3b82949423a6abe0d1c0e&q=costco - broken key

// var apiKey = '2d5564eefce3b82949423a6abe0d1c0e';

// query structure (cant use https)
// http://api.serpstack.com/search?access_key=YOUR_ACCESS_KEY&query=mcdonalds

// want 'local_results.address' .rating .price .title .url


// http://api.serpstack.com/search?access_key=2d5564eefce3b82949423a6abe0d1c0e&query=costco


// -------------------------------------------------------------------------------------

// google web search api

var apiKey = 'b8ddaabfe8msha35204713d89a7bp1c84d9jsn7aa75155a376'

// https://google-web-search1.p.rapidapi.com/?X-RapidAPI-Key:b8ddaabfe8msha35204713d89a7bp1c84d9jsn7aa75155a376&X-RapidAPI-Host:google-web-search1.p.rapidapi.com&query=World%20Cup&limit=20&related_keywords=true


// var query = 'mcdonalds-near=markham,ON';
// const url = 'https://google-web-search1.p.rapidapi.com/?query=' + query + '&limit=20&related_keywords=true';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': apiKey,
// 		'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// fetch(url, options)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// // ------------------------------------
// curl --request GET \
// 	--url 'https://google-web-search1.p.rapidapi.com/?query=World%20Cup&limit=20&related_keywords=true' \
// 	--header 'X-RapidAPI-Host: google-web-search1.p.rapidapi.com' \
// 	--header 'X-RapidAPI-Key: b8ddaabfe8msha35204713d89a7bp1c84d9jsn7aa75155a376'


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

fetch(proxyurl + url)
    .then(function (response){
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

    // const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&key=[API KEY]"; // site that doesn’t send Access-Control-*
    // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    // .then(response => response.json())
    // .then(contents => console.log(contents))


    // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mcdonalds&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyBWAZHdf5zRqq6liQdqOjUEEIqyxkdDzAc