Vue.component ('post', {
    template:  `<div class="post">
                    <div class="user">
                        <strong>{{ post.name }}</strong>
                    </div>
                    <button @click="shown=!shown">{{ post.hidden ? '+' : '-' }}</button>
                    <div class="post-body">
                        <p v-if="shown">{{ post.body }}</p>
                    </div>
                    <div class="post-footer">
                        <a href="#">{{ post.email }}</a>
                    </div>
                </div>`,
    data(){
        return {
            shown: true,
        }
    },
    props:['post'],
    // props: {
    //     post:{
    //         type: object,
    //         default:{}
    //     }
    // }
})