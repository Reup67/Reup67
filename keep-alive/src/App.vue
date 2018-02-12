<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <button @click=" selectedComponent = 'user'">Show</button>
            <button @click=" selectedComponent = 'New'">Show2</button>
            <button @click=" selectedComponent = 'Author'">Hide</button>
            <hr>
            <p>{{selectedComponent}}</p>
            <keep-alive>
                <component :is="selectedComponent">
                    
                </component> 
            </keep-alive>
           
                <!--<user>
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p >Nice</p>
                  
                </user>-->
                
            </div>
        </div>
    </div>
</template>

<script>
import user from './components/user.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
    export default {
        data: function() {
            return{
                quoteTitle:'The Quote',
                selectedComponent: 'New'
            }
        },
        components:{
        	user: user,
            New: New,
            Author: Author
        }
    }
</script>
