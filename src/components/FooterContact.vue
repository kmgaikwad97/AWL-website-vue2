<template>
<div class="black-footer">
    <div class="row justify-content-evenly text-center align-items-center footer p-0 m-0 pb-5">
        <!-- div 1 -->

        <!-- ========== div1 ========== -->
        <div class="nav footer-column-1 flex-column mt-3 col-sm-12 col-md-6">
            <router-link class="nav-link active" aria-current="page" to="/">
                <img src="../assets/images/ACE.svg" style="width: 40%" class="img-size img-fluid" alt="" />
            </router-link>
            <br />
            <p class="footer-para">
                Our vision was to create a vast unparalleled monopoly of luxurious
                companies, so as we could provide a full suite of development services
                to cater for all of our clienteles pacific needs.
            </p>
        </div>
        <!-- ========== div1 ========== -->

        <!-- ========== div2 ========== -->
        <div class="col-md-6 text-start secdiv" style="padding-left:50px">
            <!-- <h2>hello</h2> -->
            <div class="info">
                <h2 style="padding-left:30px">Information</h2>
            </div>
            <br>

            <div class="golden-div-imp">
                <!-- <div class="golden-div" v-for="(nav, index) in navigation" :key="index">
                    <span class="golden-btn" @click.enter="scrollToTop" @click="changeRoute(nav, index)">{{ nav.name }}</span>
                    <span class="golden-btn" v-show="nav.name !== this.$route.name" @click.enter="scrollToTop" @click="changeRoute(nav, index)">{{ nav.name }}</span>
                </div> -->
                <ul class="golden-div" v-for="(nav, index) in navigation" :key="index">
                    <li class="golden-btn" @click.enter="scrollToTop"  @click="changeRoute(nav, index)">{{nav.name}}</li>
                </ul>
            </div>
        </div>
        <!-- ========== div2 ========== -->

        

    </div>
</div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            routedata: "",
            // HideHome: false,
            // console.log(router);
            // navigation:""
            home: false,
            about: true,
            service: true,
            contact: true,
            navigation: [{
                    link: "/",
                    name: "Home",
                },
                {
                    link: "/aboutus",
                    name: "AboutUs",
                },
                {
                    link: "/ourservices",
                    name: "OurServices",
                },
                {
                    link: "/contactus",
                    name: "ContactUs",
                },
            ],
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        changeRoute(data, index) {
            console.log("data", data, index);
            const newArray = this.navigation;

            this.$router.push(data.link);
            console.log(">>>>+++", newArray.length);
            // newArray.splice(index, 1);
            console.log(data.name);
        },

    }
}
</script>

<style scoped>
.golden-div {
    list-style: none;
}

.golden-btn:hover {
    color: orange;
    cursor: pointer;
}

.golden-btn:before {
    content: '> ';
    padding-right: 20px;
}

.bespoken {
    box-shadow: -1px 23px 25px -7px rgba(46, 38, 46, 1);
}

.secdiv {
    color: white;
}

.img-size {
    height: 100px !important;
    width: 150px !important;
    margin-top: 0;
    margin-left: 0px;
}

.footer-para {
    text-align: start;
    font-weight: 400;
    color: white;
    font-size: 19px;
    padding: 10px;
}

.secdiv {
    font-weight: 400;
    color: white;
    font-size: 19px;
    padding: 10px;
}

.location,
.phone,
.mail {
    list-style-type: none;
    font-weight: 400;
    color: white;
    font-size: 19px;
    padding: 10px;
}

.footer-icon {
    color: orange;
    padding-right: 7px;
}

.where-data {
    padding-left: 10px;
    /* margin-left: -40px; */
}

.location-data {
    /* margin-left: -30px; */
    list-style-type: none;
    font-weight: 400;
    color: white;
    font-size: 19px;
}

.black-footer {
    border-top: 2px solid orange;
}
</style>
