<template>
    <div class="grid mx-2">
      <div class="col-12">
        <Carousel :value="products" :numVisible="4" :numScroll="4" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="txt-font-faimily surface-border border-round text-center flex justify-content-center">
              <div class="background-pr">
                <!-- <img class="img-product" :src="slotProps.data.image" :alt="slotProps.data.name" /> -->
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
            breakpoint: "991px",
            numVisible: 1,
            numScroll: 1,
          }
        ],
        products: [
          {
            news: " ทางเลือกของคนใส่ใจตัวเอง ควรกินอาหารหลากหลายครบ 5 หมู่ ในสัดส่วนที่เหมาะสมเป็นประจำ"
          },
          {
            news: "หลายๆคนคงอยากหารายได้เสริม หรือทำธุรกิจส่วนตัวกันในยุคนี้ เพื่อที่จะมีรายได้เพิ่มขึ้น  "
          },
          {
            news: "หลายๆคนคงอยากหารายได้เสริม หรือทำธุรกิจส่วนตัวกันในยุคนี้ เพื่อที่จะมีรายได้เพิ่มขึ้น  "
          },
          {
            news: "หลายๆคนคงอยากหารายได้เสริม หรือทำธุรกิจส่วนตัวกันในยุคนี้ เพื่อที่จะมีรายได้เพิ่มขึ้น  "
          },
          {
            news: "หลายๆคนคงอยากหารายได้เสริม หรือทำธุรกิจส่วนตัวกันในยุคนี้ เพื่อที่จะมีรายได้เพิ่มขึ้น  "
          },

          
         
        ],
      };
    },
  };
  </script>
  
  
  
  <style >

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
  .txt-product{
  /* color: #ffffff; */
  color: #242222;
  font-size: 30px;
  text-shadow: 1px 1px 2px rgb(179, 0, 0);
  }
  .txt-description{
  font-size: 18px;
  color:#242121;
  -webkit-text-stroke: 0.5px;
  }

  .background-pr{
    width: 80%;
    padding: 25px;
      /* background: linear-gradient(110deg, #d43535 60%, #e96060 60%); */
    background: rgb(255, 221, 221);
    border-radius: 5px;
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
    padding: 25px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
  }
  }
  
  
  </style>
  