<template>
    <div class="err" v-show="errShow">
        нет результатов     
    </div>
</template>
<script>
export default {
    data:  {
        errShow: false
    },
}
</script>