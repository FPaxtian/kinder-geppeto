<template>
    <div>
        <div class="slide-respon color-blue" v-if="color_slide == '1'">
            <div class="slide-respon-title">
                {{title}}
            </div>
        </div>
        <div class="slide-respon color-orange" v-if="color_slide == '2'">
            <div class="slide-respon-title">
                {{title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slide',
    props:[
        'title',
        'color'
    ],
    data(){
        return{
            color_slide: ""
        }
    },
    mounted(){
        this.color_slide = this.color
    }
}
</script>