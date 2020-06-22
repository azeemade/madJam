<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-6">
        <p>Update songs from our playlist to yours or add our playlist to your library and start vibing!</p>
        <p><b>***available only on Apple music for now.</b></p>
      </div>
      <div class="col-md-6">
        <button class="btn search" data-toggle="collapse" data-target="#search">
          <span class="fas fa-search"></span>
          Search 
        </button>
        <div id="search" class="collapse" >
          <input type="text" class="form-control" id="mySearch" v-model="search" placeholder="Search.." title="Type in a playlist">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mb-3" v-for="(playlist,index) in filteredList" :key="index">
        <div class="card btn" data-toggle="modal" :data-target="'#'+playlist.id">
          <div class="card-body">
            <div class="card-image" :id="playlist.pid"></div>
            <p id="title">{{playlist.title}}</p>
          </div>
        </div>
      </div>
    </div>
      <div class="modal fade" role="dialog" :id="mlist.id" v-for="(mlist, index) in mlists" :key="index">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{mlist.title}}</h4>  
                    <button type="button" class="close" data-dismiss="modal"><span class="fas fa-window-close"></span></button>
                </div>
                <div class="modal-body">
                    <iframe allow="autoplay *; encrypted-media *;" 
                    frameborder="0" height="450" class="frame" 
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                    :src="mlist.src"></iframe>
                </div>
            </div>                                   
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        search: '',
          playlists:[
              {
                  title: 'Naija club bangers',
                  id: 'ncb',
                  pid: 'ncg'
              },
              {
                  title: 'Storytelling rap',
                  id: 'str',
                  pid: 'stp'
              },
              {
                  title: 'EDM playlist',
                  id: 'edm',
                  pid: 'dmp'
              },
              {
                  title: 'Summer 16',
                  id: 's16',
                  pid: 'u16'
              },
              {
                  title: 'Money playlist',
                  id: 'tmp',
                  pid: 'mpl'
              },
              {
                  title: 'Rap Duo',
                  id: 'rdu',
                  pid: 'rdo'
              },
          ],
        mlists:[
          {
            title: 'Naija club bangers',
            src: 'https://embed.music.apple.com/ng/playlist/naija-club-bangers/pl.u-zPyLl4vTedmAaXz?app=music',
            id: 'ncb',
          },
          {
            title: 'Storytelling rap',
            src: 'https://embed.music.apple.com/ng/playlist/storytelling-rap/pl.u-qxylEeMF3lZLkKz?app=music',
            id: 'str',
          },
          {
            title: 'EDM playlist',
            src: 'https://embed.music.apple.com/ng/playlist/edm/pl.u-EdAVkGbCDGZLlPb?app=music',
            id: 'edm',
          },
          {
            title: 'Summer 16',
            src: 'https://embed.music.apple.com/ng/playlist/summer-16/pl.u-zPyLl9YFedmAaXz?app=music',
            id: 's16',
          },
          {
            title: 'Money playlist',
            src: 'https://embed.music.apple.com/ng/playlist/money-playlist/pl.u-qxylK2xT3lZLkKz?app=music',
            id: 'tmp',
          },
          {
            title: 'Rap duo',
            src: 'https://embed.music.apple.com/ng/playlist/rap-duo/pl.u-55D6XWVi6xqzR49?app=music',
            id: 'rdu',
          },
        ]
      }
  },
  computed:{
    filteredList(){
      return this.playlists.filter(playlist => {
        return playlist.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style  scoped>
  .card-image{
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }
  #ncg{
    background-image: url('../assets/imgs/undraw_partying_p92d.png');
  }
  #stp{
    background-image: url('../assets/imgs/undraw_imagination_ok71.png');
  }
  #dmp{
    background-image: url('../assets/imgs/undraw_mello_otq1.png');
  }
  #u16{
    background-image: url('../assets/imgs/undraw_sunlight_tn7t.png');
  }
  #mpl{
    background-image: url('../assets/imgs/undraw_wallet_aym5.png');
  }  
  #rdo{
    background-image: url('../assets/imgs/undraw_conversation_h12g.png');
  }
  .search{
    float: right;
  }
  #mySearch{
    width: 80%;
  }
  .frame{
    width:100%;
    max-width:660px;
    overflow:hidden;
    background:transparent;
  }
  @media (max-width: 576px) { 
    #mySearch{
        width: 60%;
    }
    .frame{
      max-width: 345px;
      margin: auto;
    }
  }
</style>
