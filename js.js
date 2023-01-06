const url = "data/music_releases.csv"
    // location of tracks list
$.get(url, function(data, error) {
    // Parse the data
    var parsedData = Papa.parse(data, {
        header: true, // Indicates that the first row in the .csv file is the column name
        skipEmptyLines: true
            // complete: populateTracksList(file)
    }).data; // Get the data property from the parsing
    // console.log(parsedData);
    populateTracksList(parsedData)
})


function populateTracksList(data) {

    // data.forEach((song, index) => {
    // });
    data.forEach(track => {
        // console.log(track.title, track);
        // console.log(track.title);

        title = track.title;
        release_date = track.release_date;
        youtube_url = track.youtube_url_playlist_included;
        bandcamp_url = track.bandcamp_url;

        // console.log("title: ", title);
        // console.log("release date: ", release_date);
        // console.log("youtube url:", youtube_url);
        // console.log("bandcamp url:", bandcamp_url);

        //* make tempcard 
        var tempDiv = $(document.createElement('div'));
        let cardClasses = "card card-track p-0 bg-info";
        $(tempDiv).addClass(cardClasses);
        // console.log(cardClasses);

        //ex: #_2022-grid
        var idtoAddto = '#_' + release_date + '-grid';
        // add to specific year grid
        // console.log('adding to this id: ', idtoAddto);
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
        $(tempBandLink).append(imgIcon);

        // make youtube embed
        var embedIframe = $(document.createElement('iframe'));
        // regex to turn url into embed 
        // for normal youtube url
        // youtube_embed_url = youtube_url.replace('watch?v=', 'embed/');
        // for playlist attached
        youtube_embed_url = youtube_url.replace('watch?v=', 'embed?');

        // console.log('preRegex url:', youtube_url);
        // console.log('postRegex url:', youtube_embed_url);
        embedIframe.attr('src', youtube_embed_url);
        embedIframe.attr('frameborder', '0');
        embedIframe.attr('allow', 'fullscreen;');
        $(embedIframe).addClass('p-0 img-fluid');
        //add youtube embed to div
        $(tempDiv).append(embedIframe);


    });

    // #_2022-grid

}


// <div class=" card card-track p-0 bg-info  ">
//                     <a href="https://froyoproductions.bandcamp.com/track/awesome-allstar-remix" target="_blank">
//                         <img class="img-fluid " src="icons/bandcamp-logo-clipart-8.png" alt="" srcset="">
//                     </a>
//                     <iframe class="p-0 img-fluid " src="https://www.youtube.com/embed/y2CVFb1W5uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; " allowfullscreen></iframe>
//                 </div>


// getText(url);