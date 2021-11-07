import categories from '@/assets/db/categories.json'
import playlists from  '@/assets/db/playlists.json'
import songs from  '@/assets/db/songs.json'
import moment from 'moment'


let controller = {
    ForYou(){
        return playlists.sort(function(a, b){
            var foo = moment(a.playlist_date, "DD/MM/YYYY").format("YYYY-MM-DD");
            var bar = moment(b.playlist_date, "DD/MM/YYYY").format("YYYY-MM-DD");

            return new Date( bar ) - new Date( foo )
        }).slice(0,4);
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
        for(;;){
            var exCategories = categories[Math.floor(Math.random() * categories.length)];
            if(ex.indexOf(exCategories) === -1) ex.push(exCategories);
            if (ex.length == 4){ break;}
        }
        return ex;
    },
    AllPlaylists(){
        var pl = []
        for(;;){
            var exPlaylists = playlists[Math.floor(Math.random() * playlists.length)];
            if(pl.indexOf(exPlaylists) === -1) pl.push(exPlaylists);
            if (pl.length == playlists.length){ break;}
        }
        return pl;
    },
    FindPlaylist(slug){
        var sPlaylist = playlists.find(a => {
            return a.playlist_slug == slug;
        });
        return sPlaylist;
    },
    FindCategory(slug){
        var sCategory = categories.find(a => {
            return a.slug == slug;
        });
        return sCategory;
    }
}

export default controller

