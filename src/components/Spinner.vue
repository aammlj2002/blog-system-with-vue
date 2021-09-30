<template>
    <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin{
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-radius: 50%;
        margin: 30px auto;
        border-top: 3px solid red;
        border-bottom: 3px solid red;
        animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin{
        to{transform: rotate(360deg);}
    }
</style>