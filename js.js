const url = "data/music_releases.csv"
    // location of tracks list
$.get(url, function(data, error) {
    // Parse the data
    var parsedData = Papa.parse(data, {
        header: true // Indicates that the first row in the .csv file is the column name

    }).data; // Get the data property from the parsing
    // console.log(parsedData);
    populateTracksList(parsedData)
})


// $('body').append(arrayToTable(Papa.parse(data).data));



function populateTracksList(data) {
    title = data[0].title;
    release_date = data[0].release_date;
    youtube_embed_url = data[0].youtube_embed_url;
    bandcamp_url = data[0].bandcamp_url;

    console.log("title: ", title);
    console.log("release date: ", release_date);
    console.log("youtube embed url:", youtube_embed_url);
    console.log("bandcamp url:", bandcamp_url);

    // make tempcard 
    var tempDiv = $(document.createElement('div'));
    let cardClasses = "card card-track p-0 bg-info";
    $(tempDiv).addClass(cardClasses);
    // console.log(cardClasses);

    // #_2022-grid
    var idtoAddto = '#_' + release_date + '-grid';
    // add to specific year grid
    console.log('adding to this id: ', idtoAddto);
    $(idtoAddto).append(tempDiv);

    // make bandcamp link
    var tempBandLink = $(document.createElement('a'));
    tempBandLink.attr('href', bandcamp_url);
    tempBandLink.attr('target', '_blank');
    // add bandcamp inside div
    $(tempDiv).append(tempBandLink);

    // make image icon
    var imgIcon = $(document.createElement('img'));
    imgIcon.attr('src', 'icons/bandcamp-logo-clipart-8.png');
    $(imgIcon).addClass('img-fluid');
    // imgIcon.classList.add('img-fluid');
    $(tempBandLink).append(tempBandLink);

    // make youtube embed
    var embedIframe = $(document.createElement('iframe'));
    embedIframe.attr('src', youtube_embed_url);
    embedIframe.attr('frameborder', '0');
    $(embedIframe).addClass('p-0 img-fluid');
    //add youtube embed to div
    $(tempDiv).append(embedIframe);

    // #_2022-grid

}


// <div class=" card card-track p-0 bg-info  ">
//                     <a href="https://froyoproductions.bandcamp.com/track/awesome-allstar-remix" target="_blank">
//                         <img class="img-fluid " src="icons/bandcamp-logo-clipart-8.png" alt="" srcset="">
//                     </a>
//                     <iframe class="p-0 img-fluid " src="https://www.youtube.com/embed/y2CVFb1W5uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; " allowfullscreen></iframe>
//                 </div>


// getText(url);