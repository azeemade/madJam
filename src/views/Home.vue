<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8">
            <p>A constantly updated playlist which includes quality songs from different artiste.</p>
          </div>
          <div class="col-md-4">
            <img src="../../public/images/Group 2.png" alt="playlist for mobile">
          </div>
        </div>
        <div class=" row section-a">
          <div class="col-md-8">
            <h2>synopsis</h2>
            <p>Listen to carefully curated playlist from your favorite streaming service.  
            Browse a wide range of playlist created specially for your delight.</p> 
          </div>
          <div class="col-md-4">
            <img src="../../public/images/Group 1.png" alt="carefully curated lists">
          </div>
        </div>
      </div>
      <div class="col-md-6 ownCorner">
        <div class="section-b">
          <router-link to="/playlist" class="btn mb-5">Browse playlists</router-link>
          <p>created by <a href="www.twitter.com/azeemade" class="ownName">Azeem Adenuga</a></p>
        </div>
      </div>
    </div>
    <div class="d-flex mb-3 foo">
      <a href="www.instagram.com/madjamng"><span class="fab fa-instagram fa-2x" title="Instagram"></span></a>
      <a href="www.twitter.com/madjamng"><span class="fab fa-twitter fa-2x" title="Twitter"></span></a>
      <span class="fas fa-plus-circle fa-2x a" title="Contribute" data-toggle="modal" data-target="#ctb"></span>
      <span class="fas fa-envelope fa-2x a" title="Subscribe" data-toggle="modal" data-target="#sub"></span>
    </div>
    <p>© 2020 konsole All rights reserved.</p>
  </div>
</template>
<style scoped>
  .section-a{
    margin-top: 48px;
    margin-bottom: 16px;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  .btn{
    background-color: #FFDB00;
    border-radius: 4px;
    width: 100%; 
  }
  .section-b{
    position: fixed;
  }
  .ownCorner{
      justify-content: center;
      display: flex;
      align-items: center;
  }
  .ownName{
    color: #FFDB00;
    text-decoration: underline;
  }
  .fa-2x{
    border: 1px solid #FFDB00;
    margin-right: 7px;
    color: #FFDB00;
    padding: 6px;
  }
  .a:not(:disabled):not(.disabled){
    cursor: pointer;
  }
@media (max-width: 576px) { 
    .section-b{
        position: relative;
    }
    .foo{
      justify-content: center;
    }
  }
</style>

