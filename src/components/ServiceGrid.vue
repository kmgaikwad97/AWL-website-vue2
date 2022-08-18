<template>
<div class="main-ele">
    <MainGrid/>
    <!-- ========== service grid ========== -->
    <div class="row m-0 text-center">
        <div class="col-md-6 col-12 p-0">
            <div class="inner">
                <div class="img-grid">
                    <img src="../assets/images/bespokedesk5.jpg" class="img-size" alt="" />
                </div>

                <div class="img-data">
                    <h1 class="img-head">Bespoke Kitchen</h1>
                    <br>
                    <a>
                        <button class="bespokeBtn">
                            <router-link class="btnsizing" to="/beskit" style="text-decoration:none; color:black;">READ MORE</router-link>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12 p-0">
            <div class="inner">
                <div class="img-grid">
                    <img src="../assets/images/bespokedesk6.jpg" class="img-size" alt="" />
                </div>
                <div class="img-data">
                    <h1 class="img-head">Bespoke Bathroom</h1>
                    <br>
                    <a>
                        <button class="bespokeBtn">
                            <router-link class="btnsizing" to="/besbat" style="text-decoration:none; color:black;">READ MORE</router-link>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== service grid ========== -->
</div>
</template>

<script>
import MainGrid from '../components/MainGrid.vue'
export default {
    components:{
        MainGrid
    }
};
</script>

<style scoped>
.inner {
    /* border: 1px solid #fff; */
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: relative;
}

.main-ele {
    width: 100% !important;
    /* padding: 20px; */
    /* margin: 0 auto !important; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img-size {
    width: 100% !important;
    height: 400px;
    transform: scale(1.2);
    background-position: center;
}

.img-grid {
    transition: 2s;
}

.img-grid:hover {
    transform: scale(1.2);
    z-index: 2;
}

.img-data {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.img-head {
    font-size: 30px;
    color: #000;
    font-weight: 700;
    background-color: #fff;
    padding: 5px 20px 5px 20px;
}

.bespokeBtn {
    height: 45px;
    min-width: 130px;
    padding: 0 16px;
    border: none;
    border-radius: 7px;
    font-weight: 400;
}
.bespokeBtn:hover{
    background: rgba(255, 255, 255,0.8);
}
@media screen and (max-width: 991px) {
    .btnsizing {
        font-size: 12px;
    }                                                               
}
</style>
