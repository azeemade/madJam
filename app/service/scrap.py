import requests
from bs4 import BeautifulSoup


# Declare var of our URL and HEADER
HEADERS = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
    'Pragma': 'no-cache', 'Cache-Control': 'no-cache'}

def scrap(URL_TO_SCRAP):
    # Make request to the specified URL
    page = requests.get(URL_TO_SCRAP,headers=HEADERS)
  
    # Parse the HTML of the page
    soup = BeautifulSoup(page.content, 'html.parser')

    # Find all the divs containing the song attributes
    song_rows = soup.findAll("div", class_="songs-list-row")

    #create tracks list to hold objects of each track
    tracks = []

    # loop the result of the song_rows
    for row in song_rows:
        title = row.find("div", class_="songs-list-row__song-name")
        artist = row.find("a", class_="click-action")

        # Add each track to the tracks lists and return the tracks
        tracks.append({"title": title.text, "artist": artist.text})

    print('all tracks from the provided link:', tracks)
    return tracks
