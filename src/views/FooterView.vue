<template>
    <div class="grid background-footer">
        <div class="col-12 lg:col-3 " style="display: flex; align-items: center;">
            <img src="../assets/img/0000DKRUB.png" class="img-logo" alt="">
        </div>
        <div class="col-12 md:col-4 lg:col-2 lg:mt-7">
            <h1 class="txt-head">เกี่ยวกับเรา</h1>
            <a href="/" class="txt-link">หน้าแรก</a><br>
        </div>
        <div class="col-12 md:col-4 lg:col-4 lg:mt-7">
            <h1 class="txt-head">ที่อยู่บริษัท</h1>
            <a href="https://maps.app.goo.gl/hu3TSkUVeQyZzuge6" target="_blank" class="txt-link">บริษัท ดีครับ คอมเมิร์ช จำกัด
สำนักงานใหญ่  เลขที่ 30/479 ซอยนวมินทร์ 80 แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230 </a>
        </div>
        <div class="col-12 md:col-4 lg:col-3 lg:mt-7">
            <h1 class="txt-head">ติดต่อเรา</h1>
            <p class="txt-link">หมายเลขโทรศัพท์ภายใน : 02-396-8440-1</p>
        </div>
        <div class="col-12 ">
            <p style="color: #ffff; text-align: center; font-size: 12px;">Copyright © 2023; Developed by NBA Digital Service; Theme by Themefisher</p>
        </div>


        

    </div>
</template>


<style scoped>
.txt-head{
    color: #ffff; -webkit-text-stroke: 1px;
}
.grid{
    margin-left: 0px;
    margin-right: 0px;
}
.background-footer{
    width: 100%;
    height: 300px;
    /* background: #f8090e; */
    background: linear-gradient(110deg, #f8090e 60%, #d40101 60%);
    margin-top: 5%;
}
.img-logo{
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.txt-link{
    font-size: 16px;
    color: #dad5d5;
    -webkit-text-stroke: 0.5px;
    text-decoration: none;
    
}
.txt-link:hover{
    color: rgb(255, 166, 0);
    
}
@media only screen and (max-width:922px){
    .img-logo{
    width: 10%;
}
.background-footer{
    height: auto;
    /* background: #f8090e; */
}
}
@media only screen and (max-width:576px){
    .txt-head{
        font-size: 20px;
        -webkit-text-stroke: 0px;
    }
 
    .img-logo{
    width: 30%;
    padding-bottom: 20px;
}
.background-footer{
    height: auto;
    padding: 30px;
}
.txt-link{
    font-size: 13px;
    
}

}
</style>



