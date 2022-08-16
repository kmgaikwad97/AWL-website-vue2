<template>
<div class="main-ele" style="background: white">
    <div class="container">
        <div class="homecontent">
            <br />
            <h1 class="heading" style="text-align: center; font-weight: 700; color: black">
                Get In Touch
            </h1>
            <br />
            <div class="row">
                <div class="col-md-4">
                    <ul class="where-data text-start">
                        <li class="location">
                            <i class="fa-solid footer-icon fa-location-dot"></i>
                            Ace Worldwide Limited,6 Roedean Avenue, Enfield, EN3 5QJ
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="where-data text-start">
                        <li class="phone">
                            <i class="fa-solid footer-icon fa-phone"></i>
                            <a style="text-decoration: none; color: #5a5a5a" href="tel:0208 058 1701">0208 058 1701</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="where-data text-start">
                        <li class="mail">
                            <i class="fa-solid footer-icon fa-envelope"></i>
                            <a style="text-decoration: none; color: #5a5a5a" href="info@aceworldwide.co.uk">info@aceworldwide.co.uk</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.location,
.phone,
.mail {
    list-style-type: none !important;
    font-weight: 500;
    color: #5a5a5a;
    font-size: 19px;
    padding: 10px;
}

.footer-icon {
    color: orange;
    padding-right: 7px;
}

.where-data {
    padding-left: 10px;
    list-style-type: none;

    
}

.location-data {
    list-style-type: none;
    font-weight: 400;
    color: white;
    font-size: 19px;
}
</style>
