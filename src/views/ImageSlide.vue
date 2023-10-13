<template>
    <div class="grid mx-2">
      <div class="col-12">
        <Carousel :value="products" :numVisible="4" :numScroll="4" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="txt-font-faimily surface-border border-round text-center flex justify-content-center">
              
              <div class="background-pr">
                <div class="header">DKRUB</div>
                <i :class="slotProps.data.icon" 
                style="
                font-size: 50px; 
                padding-top: 25px;
                color: red;
                text-shadow: 1px 1px 2px rgb(179, 0, 0);">
                </i> 
                <div class="txt-product">{{ slotProps.data.news }}</div>
              </div>
      
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </template>
  
  <script>
  import Carousel from "primevue/carousel";
  // import imageProduct from "@/assets/img/green.png";
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        activeIndex: 0,
        responsiveOptions: [
          {
            breakpoint: "1600px",
            numVisible: 3,
            numScroll: 3,
          },
          {
            breakpoint: "1199px",
            numVisible: 2,
            numScroll: 2,
          },
          {
            breakpoint: "576px",
            numVisible: 1,
            numScroll: 1,
          }
        ],
        products: [
          {
            news: "ช้อปสินค้าของเรา",
            icon: "pi pi-shopping-cart",
          },
          {
            news: "ช้อปได้ช้อปดี",
            icon: "pi pi-shopping-bag",
          },
          {
            news: "ที่ ''ดีครับ'' ",
            icon: "pi pi-map-marker",
          },
          {
            news: "เลือกรับสินค้าได้หลายแพลตฟอร์ม",
            icon: "pi pi-box",
          },
          {
            news: "มีค่าคอมมิชชั่น สำหรับผู้แนะนำ",
            icon: "pi pi-wallet",
          }

          
         
        ],
      };
    },
  };
  </script>
  
  
  
  <style>

.p-carousel-prev, .p-carousel-next {
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: red;
    border-radius: 50px;
    color: #fff;
}
/* button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {
    display: none;
} */
  .p-icon {
      color: red;
  }
  .txt-font-faimily{
  font-family: 'Kanit', sans-serif;
  
  }
  .img-product{
    width: 85%;
    background: #ff000026;
    border-radius: 10px;
  }
  /* .txt-product{
  color: #242222;
  font-size: 30px;
  text-shadow: 1px 1px 2px rgb(179, 0, 0);
  padding:25px
  } */

  .txt-product{
  /* color: #ffffff; */
  color: #ff0000;
  font-size:20px;
  text-shadow: 1px 1px 2px rgb(179, 0, 0);
  padding:16px
  }
 
  /* .background-pr{
    width: 80%;
    padding: 25px;
    background: rgb(255, 221, 221);
    border-radius: 5px;
  } */


  .background-pr{
    width: 80%;
    border-radius: 15px;
    border: 2px solid rgb(253, 34, 34);
    box-shadow: rgba(247, 0, 0, 0.24) 0px 3px 8px;
  }

  .header{
    border-top-right-radius: 11px;
    border-bottom:2px solid rgb(248, 36, 36);
    background: #ffe0de;
    border-top-left-radius: 11px;
    height: 50px;
    font-size: 25px;
    padding-top: 5px;
    -webkit-text-stroke: 2px;
    color: red;
  }

  
  
  
  
  
  @media only screen and (max-width:576px) {
  .txt-product{
  font-size: 13px;
  }
  .txt-description{
  font-size: 8px;
  }
  .background-pr{
    width: 80%;
  }
  }
  
  
  </style>
  