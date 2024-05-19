<template>
    <!-- <video src="@/assets/images/fire-sound.mp4" controls>
        Your browser does not support the video tag.
    </video>      -->
    <div :class="{ 'intro': isDarkMode}">  
        <div class="container min-vh-100">
            <div class="d-flex flex-column justify-content-center align-items-center container-content">
                <!-- <img 
                    @mouseover="titleMouseOver"
                    @mouseleave="titleMouseLeave" src="@/assets/images/logo.png" alt="" 
                /> -->
                <div @mouseover="titleMouseOver" @mouseleave="titleMouseLeave" class="title-container">
                    <h1 class="title mb-0 text-center" :class="{ 'title-inverted': isDarkMode}">
                        TATSU                           
                    </h1>
                    <video v-show="isDarkMode" id="myVideo" src="/assets/videos/finalintroexpand_1.mp4" autoplay loop muted>
                        Your browser does not support the video tag.
                    </video>          
                </div>
                  
                <button @click="home"
                    @mouseover="mouseOver" 
                    @mouseleave="mouseLeave"
                    type="button" 
                    class="col-md-2 enter-btn" 
                    :class="{ 'enter-btn-flip': !isActive, 'enter-btn-normal': isActive }">
                    <div class="enter-btn-text my-1" style="font-family:  MontSerrat;">ENTER</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const isActive = ref(false)
const isDarkMode = ref(false)

function titleMouseOver() {
    isDarkMode.value = true
}
function titleMouseLeave() {
    isDarkMode.value = false
}
function mouseOver() {
    isActive.value = true
}
function mouseLeave() {
    isActive.value = false
}

async function home() {
    await navigateTo('@/home')
}
</script>

<style scoped>
.title-container {
    width: 750px;
}
 
.container-content {
    min-height: 80vh;
}

.title {
    font-family: 'Bernoru';
    color: #1B1818;
    font-size: 300px;
    font-weight: 900;
    letter-spacing: -22px;
}

.title-inverted {
    /* use this if not using video as TATSU background */
   /* background: url(@/assets/images/background.png) no-repeat; */ 
   background: white no-repeat;
   background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  background-position: center -60px ;
} 

#myVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 11%;
  left: 5%;
  mix-blend-mode: darken;
  
}

.intro {
    background-color: black !important;
}

.enter-btn {
    width: 250px;
    position: relative;
}

.enter-btn-flip {
    border: 1px #0E0303 solid;

    /*upside down*/
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -o-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg);
}

.enter-btn-normal {
    border: 1px #F47A7A solid;
    background: #F47A7A;
}

.enter-btn-text {
    color: #0A0101;
    font-size: 11px; 
    font-family: Kokoro;
    font-weight:400; 
    letter-spacing: 2.04px;
    word-wrap: break-word;
}

/* .title {
    color: #1B1818;
    font-size: 300px;
    font-family: Bernoru;
    font-weight: 900;
    line-height: 370.50px;
} */
</style>
