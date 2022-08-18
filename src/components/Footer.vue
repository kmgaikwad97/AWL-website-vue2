<template>
<div class="black-footer pb-5">
    <div class="row justify-content-evenly text-center align-items-center footer p-0 m-0 pb-5">
        <!-- div 1 -->

        <!-- ========== div1 ========== -->
        <div class="nav footer-column-1 pt-5 flex-column mt-3 col-sm-12 col-md-4 col-md-4">
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
        <div class="col-md-3 pt-5 text-start secdiv" style="padding-left:50px">
            <!-- <h2>hello</h2> -->
            <div class="info">
                <h2 class="head-size" style="padding-left:30px">Information</h2>
            </div>
            <br>

            <div class="golden-div-imp">
                <!-- <div class="golden-div" v-for="(nav, index) in navigation" :key="index">
                    <span class="golden-btn" @click.enter="scrollToTop" @click="changeRoute(nav, index)">{{ nav.name }}</span>
                    <span class="golden-btn" v-show="nav.name !== this.$route.name" @click.enter="scrollToTop" @click="changeRoute(nav, index)">{{ nav.name }}</span>
                </div> -->
                <ul class="golden-div" v-for="(nav, index) in navigation" :key="index">
                    <li class="golden-btn" @click.enter="scrollToTop" @click="changeRoute(nav, index)">{{nav.name}}</li>
                </ul>
            </div>
        </div>
        <!-- ========== div2 ========== -->

        <!-- ========== div3 ========== -->
        <div class="col-md-5 pt-5 text-start">
            <div class="location-data info">
                <h2 class="head-size" style="padding-left:7px">Our Office</h2>
            </div>
            <br>
            <div class="where">
                <ul class="where-data text-start">
                    <li class="location">
                        <i class="fa-solid footer-icon fa-location-dot"></i>
                        Ace Worldwide Limited,6 Roedean Avenue, Enfield, EN3 5QJ
                    </li>
                    <li class="phone">
                        <i class="fa-solid footer-icon fa-phone"></i>
                        <a style="text-decoration:none; color:white;" href="tel:0208 058 1701">0208 058 1701</a>
                    </li>
                    <li class="mail">
                        <i class="fa-solid footer-icon fa-envelope"></i>
                        <a style="text-decoration:none; color:white;" href="info@aceworldwide.co.uk">info@aceworldwide.co.uk</a>
                    </li>
                </ul>
            </div>
            <br>
        </div>
        <!-- ========== div3 ========== -->

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

@media screen and (max-width: 768px) {
    .footer-para {
        font-size: 15px;
        /* font-weight: 400; */
    }

    .head-size {
        padding: 0 !important;
        font-weight: 900;
        font-size: 23px;
    }

    .secdiv {
        padding: 10px !important;
    }

    .golden-btn {
        font-size: 15px;
    }

    .location,
    .phone,
    .mail {
       font-size: 15px;
    }
}
</style>
