<!-- เผื่อได้ใช้ -->
<template>
  <div>
    <Navbar></Navbar>

    <div class="background-container pt-5">
      <div class="grid">
        <div class="lg:col-4  col-12 justify-content-center">
          <h2 class="txt-productall">สินค้าของเราทั้งหมด</h2>
        </div>
        <div class="lg:col-4 col-6 flex align-items-center">
          <!-- <input class="input-search" placeholder="ค้นหาสินค้า"/> -->
          <span class="p-input-icon-left" >
            <InputText placeholder="ค้นหาสินค้า" />
          </span>
        </div>
        <div class="lg:col-4 col-6 flex align-items-center">
          <!-- <input class="input-search" placeholder="ค้นหาสินค้า"/> -->
          <div class="card flex justify-content-center">
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="เลือกหมวดหมู่"
              class="w-full md:w-14rem" />
          </div>
        </div>

      </div>


      <div class="grid ">
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>

        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div><div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>

        <div class="col-6 md:col-4 lg:col-3 xl:col-2 ">
          <div class="card-background">
            <div class="size-img">
              <img style="width: 100%;height: 100%;object-fit: contain;" alt="user header" src="../assets/img/green.png" />
            </div>
            <div style="height: 150px;">
              <strong class="txt-head">{{ shortenText("ฮอร์โมนชนิดผงดำ โพดหลาย ตรามังกร", 25) }}</strong>
              <div class="txt-category">หมวดหมู่ <span>เครื่องดื่ม</span></div>
              <p class="txt-price">ราคา <span>350</span> บาท</p>
            </div>
            <div class="flex grid-button" >
             <a href="http://shop.dekrubshop.com/login" class="btn-cart"> <Button class="p-button-warning text-white" style="border-radius: 10px;" icon="pi pi-shopping-cart" /></a>
              <Button @click="visible = true" class="btn-description p-button-danger" label="รายละเอียด" />
            </div>
          </div>
        </div>

      </div>

    </div>


    <Dialog :visible="visible" @update:visible="val => visible = val" modal :style="{ width: '80vw' }" >
      <div class=" px-2 border-round text-white font-bold flex justify-content-center">
        <div class="card border-none txt-font-faimily">
          <div class="grid">
            <div class="md:col-4 col-12">
              <img src="@/assets/img/green.png" class="img-modal-product" alt="image" />

            </div>
            <div class="md:col-4 col-12">
              <img src="@/assets/img/green.png" class="img-modal-product" alt="image" />

            </div>
            <div class="md:col-4 col-12">
              <img src="@/assets/img/green.png" class="img-modal-product" alt="image" />

            </div>

          </div>
          <div class="card-head ">
            <p class=" text-red-500 text-xl " style="-webkit-text-stroke: 1px;">ขวดน้ำ Sprite สีเขียว</p>

            <small class="text-600" style="font-size: 14px;">หมวดหมู่</small>
          </div>
          <div class="my-2">
            <label class="text-700 " for="" style="font-size: 20px; -webkit-text-stroke: 0.5px;">รายละเอียดสินค้า</label>

          </div>
          <small class="text-700  " for=""
            style="font-size: 18px;">ซึ่งเป็นผลิตภัณฑ์จากนวัตกรรมใหม่ล่าสุดที่จะมาเติมความสดชื่น
            พร้อมเสริมคุณประโยชน์ด้วยวิตามิน B3 สูง และที่สำคัญคือ ไม่มีน้ำตาล และไม่มีแคลอรี. โดยเปิดตัวในประเทศไทย
            และออสเตรเลีย</small>
          <div class="my-2">
            <label class="text-red-500" for="" style="font-size: 24px; -webkit-text-stroke: 1px;">ราคา 350 บาท</label>

          </div>
        </div>
      </div>
      <template #footer>
        <Button label="ปิด" class="p-button-danger " icon="pi pi-times" @click="visible = false" text />
      </template>
    </Dialog>


    <ScrollTop></ScrollTop>
    <Footer></Footer>



  </div>
</template>




<script>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
// import ImagePreview from 'primevue/imagepreview';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Navbar from "@/views/NavbarView.vue";
import Footer from "@/views/FooterView.vue";
// import { ref, computed, watch } from "vue";
import ScrollTop from 'primevue/scrolltop';

export default {
  components: {
    Dialog,
    Button,
    InputText,
    // ImagePreview,
    Dropdown,
    Navbar,
    Footer,
    ScrollTop
  },
  data() {
    return {
      visible: false,
      selectedCity: null,
      cities: [
        { name: 'อาหารเสริม' },
        { name: 'ปุ๋ย' },
        { name: 'ขนม' },

      ]
    };
  },
  methods:{
    shortenText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + '...';
      }
    }
  }
};
</script>




<style scoped>
.txt-font-faimily {
  font-family: 'Kanit', sans-serif;

}

.p-dropdown {
  border: 2px solid red;
}

.p-inputtext {
  font-family: 'Kanit', sans-serif;
  border: 2px solid #ff0000;
  box-shadow: rgba(173, 8, 8, 0.24) 0px 3px 8px;
  border-radius: 50px;
  color: red;
  width: 100%;
}
.p-input-icon-left, .p-input-icon-right {
    position: relative;
    display: inline-block;
    width: 100%;
}

.txt-head-modal {
  font-size: 40px;
  color: red;
}

.txt-productall {
  font-size: 50px;
  -webkit-text-stroke: 2px;
  color: red;
  /* text-align: center; */
}

.txt-head {
  color: rgb(75, 75, 75);
  font-size: 20px;
  padding-top: 5px;
}

.txt-category {
  font-size: 15px;
  color: rgb(116, 113, 113);
  -webkit-text-stroke: 0.5px;
}

.txt-price {
  font-size: 18px;
  padding-top: 20px;
  color: #ff0000;
  -webkit-text-stroke: 0.5px;
  
}

.p-button {
  margin-left: 5px;
}

.btn-cart {
  /* background: rgb(255, 174, 0); */
  border: none;
}

.btn-description {
  border-radius: 10px;
  width: 100%;
  background: red;
  font-family: 'Kanit', sans-serif;
}

.background-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

}

.p-dropdown {
  border-radius: 50px !important;
}

.card-background {
  background: #FFF1F1;
  width: 100%;
  height: 460px;
  padding: 15px;
}

.img-product {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.img-modal-product {
  width: 100%;
  
}



.input-search {
  width: 100%;
  padding: 15px;
  border: 2px solid rgb(161, 0, 0);
}

.img-modal-product {
  width: 50%;
}

.img-modal-product-preview {
  width: 100%;
}
.size-img{
  height: 210px;
  width: 100%;
  margin-bottom: 10px;
}

.grid-button{
  margin-top: 20px;
}

@media only screen and (max-width:1500px) {
  .background-container {
    width: 95%;

  }
 


}

@media only screen and (max-width:1200px) {

  .txt-productall {
    font-size: 35px;
    text-align: center;
  }
}

@media only screen and (max-width:576px) {
  .background-container {
    width: 98%;
  }

  .grid-button{
  margin-top: 5px;
}

  .txt-head {
    font-size: 16px;
  }

  .txt-category {
    font-size: 12px;
  }

  .txt-price {
    font-size: 15px;
  }



  .btn-description {
    font-size: 12px;
  }


  .txt-productall {
    font-size: 35px;
    text-align: center;
    margin-top: -5%;
  }


  .img-modal-product {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width:380px) {
  .btn-description {
    padding: 5px;
  }
}</style>