<template>
   <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" >
                <h1>Routing</h1>
                
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide">
                     <router-view></router-view>                    
                </transition>

                <router-view name="header-bottom"></router-view>
               
            </div>
        </div>
    </div>

</template>
              
 
<script>
import user from './components/user.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
import Header from './components/Header.vue';
import UserStart from './components/UserStart.vue';
    export default {
        data(){
            return{
               
            }
        },
        methods:{
           
        },
        components:{
        	user: user,
            New: New,
            Author: Author,
            Header:Header,
            UserStart: UserStart
        }
    }
</script>
