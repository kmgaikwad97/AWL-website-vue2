<template>
<!-- <div id="app"></div> -->
<div id="font-imp">
    <nav class="navbar navbar-expand-lg darkbg">
        <div class="container">
            <div class="myclass">
                <!-- ACE Logo start -->

                <a href="#top" class="navbar-brand linkss" to="/">
                    <img src="./assets/images/ACE.svg" class="logo-svg ace-logo" alt="" />
                </a>

                <!-- ACE Logo End -->

                <!-- respo button start-->
                <div class="data">
                    <button class="navbar-toggler navbarbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>

                <!-- respo button end -->

                <!-- links starts -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-change navbar-nav ms-auto myul text-start mb-2 mb-lg-0">
                        <li class="nav-item space">
                            <router-link class="list" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item space">
                            <router-link class="list" aria-current="page" to="/ourservices">Our Services</router-link>
                        </li>
                        <li class="nav-item space">
                            <router-link class="list" aria-current="page" to="/aboutus">About Us</router-link>
                        </li>
                        <li class="nav-item space">
                            <router-link class="list" aria-current="page" to="/contactus">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <!-- links ends -->

                <!-- div tag -->
            </div>

            <!-- end -->
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style>
.main-ele {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#font-imp {
    font-family: 'Roboto Slab', serif;
    background: black;

}

#app {
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: orange;
    border: none;
}

.darkbg {
    background: black !important;
}

.ace-logo {
    height: 90px;
    width: 100%;
}

.myclass {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.linkss {
    /* margin-right: 300px !important; */
}

.list {
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding-left: 18px;
    font-size: 20px;
    font-weight: bold;
    font-weight: 400;
}

.list:hover {
    color: orange;
}

.space {
    padding-right: 30px !important;
    padding: 7px 0;
}

.nav-link.active {
    color: rgb(255, 255, 255);
}

.navbar-toggler {
    background: white !important;
}

.myul {
    padding-top: 25px;
}

.navbarbtn {
    margin: auto 0 !important;
    padding: 7px !important;
}

@media (max-width: 1200px) {
    .list {
        margin: 0;
    }
}

@media (min-width: 768px) {
    .navbar-expand-lg {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
}

@media only screen and (max-width: 991px) {
    .main-ele {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
}
    .list {
        color: rgb(0, 0, 0);
    }

    .navbarbtn {
        margin: 0;
    }

    .navbar {
        background: white !important;
    }

    .navbar-toggler-icon {
        font-size: 22px;
        font-weight: 900;
        /* width: 28px !important; */
    }

    button:focus{
        outline: none !important;
    }

    .navbar-toggler {
        border: none !important;
    }

    .navbar-change {
        left: 0px;
        position: fixed;
        background: #d6d6d6;
        ;
        width: 300px;
        height: 100%;
        top: 0;
        z-index: 2;
        transition: 0.5s;
        padding: 30px;
    }
}

@media only screen and (max-width: 767px) {
    html {
        font-size: 45%;
    }

}

@media only screen and (max-width: 576px) {
    .navbar-change {
        width: 150px;
    }
    .space a{
        font-size: 18px !important;
    }

    .list {
        padding: 0;
    }

    .ace-logo {
        height: 70px;
    }

    .myclass {
        margin: 0 10px !important;
    }

    html {
        font-size: 35%;
    }
}

@media only screen and (max-width: 991px) {
    html {
        font-size: 55%;
    }
    .myclass{
        display: contents;
    }
    .navbar-change{
        transition: 0.9s ease-in linear !important;
        padding-left: 20px;
    }
}

@media only screen and (max-width: 400px) {
    html {
        font-size: 30%;
    }
}

@media only screen and (max-width: 260px) {}
</style>
