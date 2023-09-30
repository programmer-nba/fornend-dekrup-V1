
<template>
    <div class="grid color-navbar">
        <div class="col-2 md:col-1 lg:col-3">
            <span class=" border-circle mx-2 w-4rem h-3rem flex align-items-center justify-content-center mt-2">
                <img src="@/assets/img/Deekrub.png" style="width: 100%; " />
            </span>

        </div>
        <div class=" col-2 md:col-2 lg:col-6 flex justify-content-center">
            <Menubar :model="items"
                class=" custom-menu border-round-3xl p-0 mt-2 width-navbar toggle-navbar  hover:border-2 hover:border-purple-900 flex align-items-center justify-content-center bg-white">
            </Menubar>
        </div>

        <div class="col-8 md:col-9 lg:col-3 px-5 flex align-items-center justify-content-end ">

            <a href="http://shop.dekrubshop.com/login">
                <Button class="btn-login ">
                    <span class="txt-login">Login</span>
                </Button>
            </a>
        </div>
    </div>
</template>

<script setup>

import Menubar from 'primevue/menubar';

import { ref } from "vue";

const items = ref([
    {
        label: "หน้าหลัก",
        icon: "pi pi-fw pi-home",
        // to: "/",
    },
    // {
    //     label: "สมัครสมาชิกกับเรา",
    //     icon: 'pi pi-user-edit',
    //     //  to: "/register",
    // },

]);
</script>



<style >
/* .grid{
   margin-right: 0px !important;
} */
.color-navbar {
    background: #f8090e;
    position: sticky;
    top: 0;
    z-index: 100;

}

body {
    font-family: 'Kanit', sans-serif;
    overflow-x: hidden !important;

}

.btn-login {
    border-radius: 50px !important;
    background: #ffff !important;
    color: red !important;
    -webkit-text-stroke: 1px;
    font-size: 25px !important;
    border: none !important;
    padding: 5px !important;
    padding-left: 60px !important;
    padding-right: 60px !important;
    cursor: pointer !important;
}

.btn-login:hover {
    color: #ffff !important;
    background: #ffaf00 !important;
}

.txt-login {
    font-family: 'Kanit', sans-serif;
}

.custom-menubar {
    height: 90px;
}


.logo {
    width: 100px;
    height: 75px;
    margin-right: 10px;

}

/* @media print {
.none {
    display: none;
}
} */

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link .p-menuitem-text {
    color: #495057;
    -webkit-text-stroke: 1px;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link .p-menuitem-icon {
    color: #f44336 !important;
    margin-right: 0.5rem;
    -webkit-text-stroke: 1px;
}

.p-menubar.p-menubar-mobile-active .p-menubar-root-list {
    width: 300px;
    border-radius: 10px;
}

.width-navbar {
    font-family: 'Kanit', sans-serif;
    width: 60%;
}

@media only screen and (max-width:576px) {
    .btn-login {
        font-size: 18px !important;
        padding-left: 17px !important;
        padding-right: 15px !important;
    }

    .toggle-navbar {
        font-family: 'Kanit', sans-serif;
        width: 100%;
    }

    .p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link .p-menuitem-text {
        -webkit-text-stroke: 0.5px;
    }
}</style>