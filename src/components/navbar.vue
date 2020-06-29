<template>
    <div>
        <nav id="navbar" class="navbar">
            <div class="container">
                <router-link class="navbrand-name" to="/">madJam</router-link>
                <div class="dropdown">
                    <button class="btn" 
                        type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" 
                        aria-expanded="true"><span class="fas fa-ellipsis-h ml-2"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/playlist">Playlists</router-link></li>
                        <li><a href="#" data-toggle="modal" data-target="#ctb">Contribute</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#sub">Subscribe</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="header">
            <div class="container">
                <router-link class="headbrand-name" to="/">madJam</router-link>
            </div>
        </div>
        <div class="modal fade navModal" role="dialog" id="ctb">                
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="modal-title text-center">Contribute to our lists</h4>  
                            <button type="button" class="close" data-dismiss="modal"><span class="fas fa-window-close"></span></button>
                        </div>
                        <p>Are you a curator or you specialise in making playlist, send us a mail to be part
                            of madJam commuinity.</p>
                        <div class="mb-5">
                            <form name="contact" method="post" data-netlify="true">
                                <div class="form-group">
                                    <input type="text" placeholder="Name" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <textarea name="message" id="msg" class="form-control" rows="10" required></textarea>
                                </div>
                                <button type="submit" class="btn sbtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>                                   
            </div>
        </div>
        <div class="modal fade navModal" role="dialog" id="sub">                
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="modal-title text-center">Subscribe</h4>  
                            <button type="button" class="close" data-dismiss="modal"><span class="fas fa-window-close"></span></button>
                        </div>
                            <p>Subscribe to our newsleter to get the latest action in the madJam community.</p>
                        <div class="mb-5">
                            <form name="subscribe" method="post" data-netlify="true" 
                            data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">  
                                <input type="hidden" name="form-name" value="subscribe" />                                     
                                <div class="form-group">
                                    <input type="text" placeholder="Email" class="form-control" required v-model="email">
                                </div>                         
                                <button type="submit" class="btn sbtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>                                   
            </div>
        </div>
    </div>
</template>
<style scoped>
    .headbrand-name{
        font-size: 40px;
        color: black;
        font-weight: bold;
    }

    .navbrand-name{
        font-size: 20px;
        color: black;
        font-weight: bold;
    }
    #navbar {
        overflow: visible;
        background-color: white;
        transition: 0.4s;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        display: none;
    }
    #header {
        color: black;
        margin-top: 64px;
    }
    .dropdown-menu li{
        text-align: right;
        margin: 15px;
    }
    li a{
        color: black;
    }
    .dropdown-menu{
        right: 0;
        left: auto;
    }
    .show.navModal{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sbtn{
        background-color: #FFDB00;
        border-radius: 4px;
    }
</style>
<script>
import axios from "axios";
export default {
    data(){
        return{
            texts:[
                {
                    name: 'Home',
                    id: 'hme'
                },
                {
                    name: 'Playlist',
                    id: 'pyt'
                },
                {
                    name: 'Contribute',
                    id: 'ctb'
                },
                {
                    name: 'Subscribe',
                    id: 'sub'
                }
            ],
            email: "",
        }
    },
    created(){
        window.addEventListener('scroll', this.scrollFunction);
    },
    destroyed(){
        window.removeEventListener('scroll', this.scrollFunction);
    },
    methods:{
        scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.display = "block";
                document.getElementById("header").style.display = "none";
            } else {
                document.getElementById("navbar").style.display = "none";
                document.getElementById("header").style.display = "block";
            }
        },
        encode (data) {
            return Object.keys(data)
                .map(
                key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },
        handleSubmit () {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };
            axios.post("/",
                this.encode({
                "form-name": "subscribe",
                ...this.form
                }),
                axiosConfig
            )
            .then(() => {
                this.$router.push('thanks')
            })
            .catch(() => {
                this.$router.push('404')
            })
        }
    } 
}
</script>