<template>

        <div style="height: 100%; width: 100%; position: relative; ">

            <section id="background" class="background">

                    <navbar style="z-index: 1;" />  
                    <Dropupbttn style="z-index: 2; left: 89%;" />


                    <div style="color: white; font-size: 64px; font-family: Bernoru; font-weight: 900; line-height: 50.40px; box-shadow: black 3px; padding-left: 19%; padding-top: 5%; ">TALE OF THE TATSU</div>

                        <div class="containerHistory">
                            
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>

                            <span class="paragraph" style="z-index: 2; bottom: 317px; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-style: regular ;font-weight: 400; line-height: 25px; letter-spacing: 1.20px; word-wrap: none;"> 
                                                 <a  v-if="showFirstText" @click="showText1" style="text-decoration: none; color: white;"> I-   Origins </a>
                                            <br/><a  v-if="showFirstText" @click="showText3" style="text-decoration: none; color: white;"> II-     Philosophy </a>
                                            <br/><a  v-if="showFirstText" @click="showText4" style="text-decoration: none; color: white;"> III-    Way of life </a>
                                            <br/><a  v-if="showFirstText" @click="showText5" style="text-decoration: none; color: white;">IV-     Relation to the world</a>
                                            <br/><a  v-if="showFirstText" @click="showText6" style="text-decoration: none; color: white;">V-      Powers</a>
                                            <br/><a  v-if="showFirstText" @click="showText7" style="text-decoration: none; color: white;">VI-     The future</a>
                                    
                            </span>

                                <div v-if="showSecondText" class="paragraph" style="z-index: 2;  left: 7px; position: relative; color: white; bottom: 448px; font-family: IMBPlexMono; font-size: 12.5px;  font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 98%;"> 
                                    I- Origins  <br/> 
                                    Long before the great collapse and the rise of the citadel,
                                    the Tatsu were guardians of traditions that dated back millennials.
                                    nestled within the folds of the sacred mountain named “Tobirama”,
                                    they were the last vestiges of an ancient civilization that stood as
                                    a testament to the enduring spirit of humanity. their village, protected
                                    by the mountain's treacherous terrain, remained concealed from the 
                                    prying eyes of technology and the modern world. the Tatsu  are said 
                                    to be descendants of the dragons.
                                        
                                </div>
                            
                                <div v-if="showSecondText" @click="showText2" id="aleft" style="bottom: 447px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div class="paragraph" v-if="showThirdText" style="z-index: 2; left: 7px; position: relative; color: white; bottom: 448px; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                    II- Philosophy  <br/> 
                                    Believers in harmony, balance, and the interconnectedness
                                    of all things, the Tatsu are deeply spiritual. They abide by the teachings 
                                    of the dragon – a symbol of strength, wisdom and resilience. For them,
                                    the dragon is not just a mythical creature but a representation of the life
                                    force that binds every living being
                                    
                                 </div>
                        
                                <div v-if="showThirdText" id="aleft" @click="showText3" style="bottom: 447px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>


                                <div class="paragraph" v-if="showForthText" style="z-index: 2; left: 7px; position: relative; color: white; bottom: 448px; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 97%;"> 
                                    III- Way of life  <br/> 
                                    Shunning most modern conveniences, the tatsu are masters of 
                                    the old ways. Their homes are built from materials found on the sacred mountain, and 
                                    they cultivate the land for sustenance. Through rigorous training, discipline, and 
                                    meditation, they become legendary samurais, mastering both the martial arts and the 
                                    art of governance with a gentle yet firm hand. 
                                      
                                </div>
                                
                                <div id="aleft" v-if="showForthText" @click="showText4" style="bottom: 447px;  left: 85%; position: relative;">
                                    <a class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>
                                    

                                <div class="paragraph" v-if="showFifthText" style="z-index: 2;  left: 7px; position: relative; color: white; bottom: 448px; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; width: 99%; height: fit-content;"> 
                                    IV- Relation to the world <br/> 
                                    With the world in chaos below, many  
                                    have sought refuge in legends, and tales of the dragon-riding 
                                    samurais of the sacred mountain spread far and wide. While 
                                    the Tatsu traditionally kept to themselves, the changing world
                                    has made it harder for them to remain completely isolated. They 
                                    have sometimes acted as mediators between warring factions, 
                                    their reputation affording them a respect few could claim. 
                                    however, they've been cautious of the citadel and its advances,
                                    viewing its existence as a sign of the world's imbalance.
                                    
                                </div>
                                
                                <div id="aleft" v-if="showFifthText" @click="showText5" style="bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                                <div class="paragraph" v-if="showSixthText" style="z-index: 2; bottom: 448px; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 98%;"> 
                                    V-   Powers  <br/> 
                                    Their combat style is fluid, drawing inspiration from the movements of the dragon,
                                    making it unpredictable and deadly. Their swords, forged from the rare minerals 
                                    of the sacred mountain, are said to possess the spirit of the dragon, Making 
                                    them exceptionally durable and sharp. Most of the Tatsu use an ancient energy 
                                    called “ryūsei” that gained them unparalleled physical abilities and commanding 
                                    the elements, this energy is also said to transform their bodies but it is  only a legend.
                                         
                                </div>
                                
                                <div id="aleft" v-if="showSixthText" @click="showText6" style="bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                                
                                <div class="paragraph" v-if="showSeventhText" style="z-index: 2; bottom: 448px; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 97%;"> 
                                    VI-  The future <br/>
                                    While most of the tatsu remain largely neutral, with exception of those 
                                    already living on the iron city, their wisdom and combat skills are sought 
                                    after. Rumors abound that they possess an ancient relic with the power to 
                                    bring harmony back to the world, making them a potential ally, or threat, 
                                    to any faction. As whispers of a new rebellion grow louder, many wonder if 
                                    the time has come for the Tatsu to descend from their sacred sanctuary and 
                                    play a decisive role in the fate of the world.
                                     
                                </div>
                            
                                <div id="aleft" v-if="showSeventhText" @click="showText7" style="bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                        </div>

                        <p style="font-family: Bernoru; color: #1D1B1B; font-size: larger; top: -18%;
                        position: relative ; left: 42%;" v-if="showFirstText" >MORE TALES</p>

                        <div id="aup" v-if="showFirstText" >
                           <a  href="#background2" class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aup" icon="fa-solid fa-arrow-down" size="lg"  style="color: white;" />
                           </a>
                        </div>
            </section> 

            <section id="background2" class="background2">

                
                <div style="color: rgb(252, 252, 252); font-size: 64px; font-family: Bernoru; font-weight: 900; line-height: 50.40px; padding-left: 21%; padding-top: 220px">TALE OF NOHIMA</div>
                
                    <div class="containerHistory2">

                                        
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>


                            <span class="paragraph" style="z-index: 2; bottom: 316px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-style: regular ;font-weight: 400; line-height: 25px; letter-spacing: 1.20px; word-wrap: none;"> 
                                                 <a  v-if="showEigthText" @click="showText8" style="text-decoration: none; color: white;"> I- Prelude to the fall </a>
                                            <br/><a  v-if="showEigthText" @click="showText10" style="text-decoration: none; color: white;"> II- Construction of the citadel </a>
                                            <br/><a  v-if="showEigthText" @click="showText11" style="text-decoration: none; color: white;"> III- The great collapse</a>
                                            <br/><a  v-if="showEigthText" @click="showText12" style="text-decoration: none; color: white;"> IV- Emergence of factions</a>
                                            <br/><a  v-if="showEigthText" @click="showText13" style="text-decoration: none; color: white;"> V- The ascendance of the citadel</a>
                                            <br/><a  v-if="showEigthText" @click="showText14" style="text-decoration: none; color: white;"> VI- Revolt & resistance</a>
                                            <br/><a  v-if="showEigthText" @click="showText15" style="text-decoration: none; color: white;"> VII- The peace accords</a>
                                            <br/><a  v-if="showEigthText" @click="showText16" style="text-decoration: none; color: white;"> VIII- The present day</a>
                                    
                            </span>

                            <div v-if="showNinthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                   I-    Prelude to the fall <br/>
                                   On the City of Nohima, by the mid-21st century, unchecked technological 
                                   advancements and massive global inequality had reached a tipping point. 
                                   As economic disparity deepened, the planet was choked by pollution and 
                                   climate catastrophes. Mega-corporations with the help of ai held more 
                                   power than nations, leading to a world where the wealth of a few 
                                   superseded the needs <br/> of the many.
                                       
                                </div>
                            
                                <div v-if="showNinthText" @click="showText9" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showTenthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  II-   Construction of the citadel<br/>
                                  In the late 21st century, an alliance of the world's wealthiest individuals 
                                  and corporations unveiled their magnum opus: the citadel. this massive flying
                                  city, held aloft by anti-gravity technology, became a sanctuary for the elite.
                                  equipped with sustainable resources and cutting-edge technology, it symbolized
                                  a world above the chaos.
                                        
                                </div>
                            
                                <div v-if="showTenthText" @click="showText10" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showEleventhText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  III-  The great collapse <br/>  
                                  The global economy, already teetering on the brink, finally shattered. hyperinflation, 
                                  mass unemployment, and collapsing infrastructure led to riots and breakdowns in social 
                                  order. Below the citadel, the world crumbled.
                                       
                                </div>
                            
                                <div v-if="showEleventhText" @click="showText11" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showTwelfthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  IV-   Emergence of factions <br/>
                                  in the post-collapse world, as governments disintegrated, survivors banded together into
                                  factions for safety and resources. The slums beneath the shadow of the citadel became a 
                                  patchwork of territories, each governed by its own rules and leaders. gangs, technocrats, 
                                  and former military units all staked their claims.
                                        
                                </div>
                            
                                <div v-if="showTwelfthText" @click="showText12" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showThirteenthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  V-    The ascendance of the citadel <br/> 
                                  The residents of the citadel, watching the world decay below them, realized that to preserve 
                                  their way of life, they needed to intervene. Leveraging their technological superiority, they 
                                  began to offer protection, resources, and order to select factions below. In exchange, these 
                                  factions provided resources, labor, and loyalty.
                                       
                                </div>
                            
                                <div v-if="showThirteenthText" @click="showText13" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showFourteenthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VI-   Revolt & resistance <br/>
                                  Not all factions were willing to bow to the citadel's dominion. rebel groups formed, some 
                                  aiming to topple the flying city and its overlords, while others sought to build a new world
                                  order entirely. Tensions between the citadel-backed factions and the rebels frequently 
                                  erupted into skirmishes and all-out warfare.
                                        
                                </div>
                            
                                <div v-if="showFourteenthText" @click="showText14" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showFifteenthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VII-  The peace accords <br/> 
                                  After years of fighting, key leaders from the citadel and several major factions convened 
                                  for peace talks. the resulting peace accords led to a fragile truce. The citadel would provide
                                  technology, infrastructure, and security, while the factions would govern their territories 
                                  autonomously, paying a "tribute" to the flying city.   
                                        
                                </div>
                            
                                <div v-if="showFifteenthText" @click="showText15" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showSixteenthText" class="paragraph" style="z-index: 2; bottom: 500px; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VIII- The present day <br/> 
                                  The world is now a blend of old and new. <br/> 
                                  The citadel, shining above, continues to symbolize both hope and oppression, depending 
                                  on who you ask. the factions, ever-vigilant and ever-scheming, navigate a complex web of 
                                  alliances and rivalries. And in the shadows, whispers of a new rebellion grow louder. 
                                       
                                </div>
                            
                                <div v-if="showSixteenthText" @click="showText16" id="aleft" style="bottom: 500px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <!--
                                <div v-if="showNinthText" id="adown">
                                <a href="#background" class="ms-2 me-2 team-link link-dark text-center"  >
                                    <font-awesome-icon class="aup" icon="fa-solid fa-arrow-up" size="lg" style="color: white;" />
                                </a>
                                </div>
                                -->
                                
                    </div>
                
            </section>
     </div>   

</template>


<script >

export default {
  data() {
    return {
      showFirstText: true,
      showSecondText: false,
      showThirdText: false,
      showForthText: false,
      showFifthText: false,
      showSixthText: false,
      showSeventhText: false,

      showEigthText: true,
      showNinthText: false,
      showTenthText: false,
      showEleventhText: false,
      showTwelfthText: false,
      showThirteenthText: false,
      showFourteenthText: false,
      showFifteenthText: false,
      showSixteenthText: false,
    };
  },
  methods: {
    showText1() {
      this.showFirstText = !this.showFirstText;
      this.showSecondText = true;
    },
    showText2() {
      this.showSecondText = !this.showSecondText;
      this.showFirstText = true;
    }, 
    showText3() {
      this.showThirdText = !this.showThirdText;
      this.showFirstText = !this.showFirstText;
    },
    showText4() {
      this.showForthText = !this.showForthText;
      this.showFirstText = !this.showFirstText;
    },
    showText5() {
      this.showFifthText = !this.showFifthText;
      this.showFirstText = !this.showFirstText;
    },
    showText6() {
      this.showSixthText = !this.showSixthText;
      this.showFirstText = !this.showFirstText;
    },showText7() {
      this.showSeventhText = !this.showSeventhText;
      this.showFirstText = !this.showFirstText;
    },

    showText8() {
      this.showEigthText = !this.showEigthText;
      this.showNinthText = true;
    },   
    showText9() {
      this.showNinthText = !this.showNinthText;
      this.showEigthText = true;
    }, 
    showText10() {
      this.showTenthText = !this.showTenthText;
      this.showEigthText = !this.showEigthText;
    },   
    showText11() {
      this.showEleventhText = !this.showEleventhText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText12() {
      this.showTwelfthText = !this.showTwelfthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText13() {
      this.showThirteenthText = !this.showThirteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText14() {
      this.showFourteenthText = !this.showFourteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText15() {
      this.showFifteenthText = !this.showFifteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText16() {
      this.showSixteenthText = !this.showSixteenthText;
      this.showEigthText = !this.showEigthText;
    }, 

  },
};

</script>


<style scoped>



#aup{

    background-color: #1D1B1B;
    width: 30px;
    height: 30px;
    top: -23%;
    left: 39%;
    position: relative;
    
}

.aup{

  position: relative;
  animation-name: example;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  
}

@keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:1%;}
  50%  {left:0px; top:5%;}
  75%  {color: pink;left:0px; top:1.05%;}
  100% {color: pink; left:0%; top:0px;}
}


#adown{

    background-color: #1D1B1B;
    width: 30px;
    height: 30px;
    top:-50%;
    left: 70%;
    

    position: relative;
    z-index: 2;
}

.aleft{

    animation-name: movement;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    position: relative;

}

@keyframes movement {
    0%  {left:0px; top:0px;}
    25%  {left:-1%; top:0px;}
    50%  {left:-1.08%; top:0px;}
    75%  {left:-0.1%; top:0px;}
    100% {left:0%; top:0px;}
    }

.background {
    background-image: url('assets/images/v2/dragon.png');
    background-size: 100%;
    
    background-position-y: 90%;
    background-repeat: no-repeat;
    background-color: white;
    
    


    width: 100%;
    height: 100vh;
    position: relative;


    z-index: 0;
    
}

.background2 {
    background-image: url('assets/images/blackNwhiteCity-transparent-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    


    width: 100%;
    height: 100vh;
    position: relative;


    z-index: 0;
    
    
}


.containerHistory{
    width: 479px; 
    height: auto; 
    left: 20%; 
    top: 25px;
    position: relative; 

    flex-direction: column; 
    text-align: justify ; 
    align-items: stretch; 


    overflow-y: auto;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.containerHistory2{
    width: 479px; 
    height:400px; 
    left: 20%; 
    top: 30px;
    position: relative; 

    flex-direction: column; 
    text-align: justify ; 
    align-items: stretch; 
    background-clip: content-box;


    overflow-y: hidden;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}


.paragraph {

    text-align: start;

}



</style>
