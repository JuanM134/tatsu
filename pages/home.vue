<template>

    <div class="background"> 
        <navbar style="z-index: 4;" />   
        <Dropupbttn style="z-index: 4;" /> 
        

        <div class="" style="z-index: -1;">
            <video autoplay loop muted id="myVideo" src="@/assets/videos/finalintroexpand_1.mp4" >
                Your browser does not support the video tag.
            </video>
            
        </div>


            <video autoplay loop muted id="myVideo2"  style="z-index: 3;" >
                <source src="@/assets/videos/fireWithSound.mp4"  type="video/h264" > 
                Your browser does not support the video tag.
            </video>



        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="title" style="z-index: 1;">TATSU </h1>
        </div> 

        

    </div>

        <!-- <div class="d-flex justify-content-center align-items-center">
            <h1 class="title">TATSU</h1>
        </div> -->
    
</template>

<script setup lang="ts">

</script>

<style scoped>

.background {
    
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    background-position: center ;
    

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    
    z-index: 0;
}

.title {
    font-family: 'Bernoru';
    color: #000000;
    font-size: 400px;
    font-weight: 900;
    letter-spacing: -22px;
    margin-top: -5%;
  

    z-index: 1;
    /* margin-top: -100px; */
}

.home {

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

#myVideo {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  mix-blend-mode: multiply;
  
  /* position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%; */
}

#myVideo2 {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  right: 0;
  bottom: 0;
  opacity: 100%;
  mix-blend-mode: lighten;
  /*mix-blend-mode: color-burn;*/

}


</style>
