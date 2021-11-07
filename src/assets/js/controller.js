import categories from '@/assets/db/categories.json'
import playlists from  '@/assets/db/playlists.json'
import songs from  '@/assets/db/songs.json'
import moment from 'moment'
import store from '../../store'


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
        var today = moment().format('DD/MM/YYYY')
        //for(var i in playlists){
            //var y = Math.floor(Math.random() * 15);
          //  console.log(playlists.slice(0,4));
       // }
        var fyPlaylists = playlists.filter(a=> {
            //var date = new Date(a.playlist_date);
            var date = a.playlist_date;
            //date = Object.keys(date)
            return (date <= today);
        })
        return fyPlaylists;
    },
    PopularPlaylists(){
        var popPlaylists = playlists.filter(a=> {
            var size = a.songs_count;
            return (size >= 15);
        })
        return popPlaylists.slice(0,4);
    },
    ExploreCategories(){
        var ex = []
        for(var i = 0; i<categories.length; i++){
            var exCategories = categories[Math.floor(Math.random() * categories.length)];
            if(ex.indexOf(exCategories) === -1) ex.push(exCategories);
        }
        return ex.slice(0,4);
    },
    AllPlaylists(n, searchItem){
        var k = 10
        k += n 
        /*return playlists.slice(0,k);*/
       // var searchItem = "ope"
        
       // var allPlaylists =  
        return playlists.filter(a => {
            return a.playlist_title.toLowerCase().includes(searchItem.toLowerCase())
        }).slice(0,k)
       // return allPlaylists.slice(0,k);
    },
    FindPlaylist(slug){
        var sPlaylist = playlists.find(a => {
            return a.playlist_slug == slug;
        });
        return sPlaylist;
    }
}

export default controller

