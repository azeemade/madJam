import categories from '@/assets/db/categories.json'
import playlists from  '@/assets/db/playlists.json'
import songs from  '@/assets/db/songs.json'
import moment from 'moment'


let controller = {
    ForYou(){
        /*console.log(playlists['length'])
        console.log(playlists)
        Math.floor(Math.random() * 4);
        var arr = [];

        for (var i=0; i < 4; i++){
            var y = Math.floor(Math.random() * 15);
            arr.push(y);
        }
        console.log(arr);*/
        var today = "06/11/2021"//moment().format('DD/MM/YYYY')
        //for(var i in playlists){
            //var y = Math.floor(Math.random() * 15);
          //  console.log(playlists.slice(0,4));
       // }
        var plist = playlists.filter(a=> {
            //var date = new Date(a.playlist_date);
            var date = a.playlist_date;
            //date = Object.keys(date)
            return (date <= today);
        })
        return plist;
    },
    PopularPlaylist(){


    },
    ExploreCategories(){

    }
}

export default controller

