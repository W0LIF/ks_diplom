<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">
                Выглядишь так, словно заблудился
              </h3>
              <p>страница, которую вы ищете, недоступна!</p>
              <router-link @click="scrollToTop()" to="/">  Главная</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "error",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{

  background-image: url(dribbble_1.gif);
  height: 400px;
  background-position: center;
  text-align:center;
}

.four_zero_four_bg h1{
  font-size:80px;
}

.four_zero_four_bg h3{
  font-size:80px;
}

.link_404{
  color: #fff!important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;}
.contant_box_404{ margin-top:-50px;}

</style>