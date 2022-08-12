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
                <button class="navbar-toggler navbarbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- respo button end -->

                <!-- links starts -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto myul text-center mb-2 mb-lg-0">
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

<style>
#font-imp {
    font-family: 'Roboto Slab', serif;
    /* text-align: center; */

}

#app {
    font-family: 'Roboto Slab', serif;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
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
    height: 100px;
    width: 200px;
}

.myclass {
    display: flex;
    margin-left: -92px;
    margin-top: -22px;
}

.linkss {
    margin-right: 300px !important;
}

.list {
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding-left: 18px;
    margin-left: 28px;
    font-size: 20px;
    font-weight: bold;
    font-weight: 400;
}

.list:hover {
    color: orange;
}

.space {
    padding-right: 2vw;
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

@media (min-width: 768px) {
    .navbar-expand-lg {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
}

@media only screen and (max-width: 992px) {
    .logo-svg {
        width: 15%;
    }
}

@media only screen and (max-width: 767px) {
    html {
        font-size: 45%;
    }

    .logo-svg {
        width: 20%;
    }

    .navbarbtn {
        margin-left: 65% !important;
    }
}

@media only screen and (max-width: 576px) {
    .navbar {
        position: static;
    }

    html {
        font-size: 35%;
    }

    .logo-svg {
        width: 25%;
    }

    .myclass {
        display: inline-block;
    }

    .navbarbtn {
        margin-left: 50% !important;
    }
}

@media only screen and (max-width: 991px) {
    html {
        font-size: 55%;
    }

    .myclass {
        display: inline-block;
    }

    .navbarbtn {
        margin-left: 73%;
    }
}

@media only screen and (max-width: 400px) {
    html {
        font-size: 30%;
    }

    .navbarbtn {
        margin-left: 44% !important;
    }

    .myclass {
        display: inline-block;
    }
}

@media only screen and (max-width: 260px) {
    .navbarbtn {
        margin-left: 33% !important;
    }
}
</style>
