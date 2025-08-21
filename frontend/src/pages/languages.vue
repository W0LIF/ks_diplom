<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Языки программирования</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><b>Язык программирования </b>— это набор формальных правил, по которым пишут программы. Обычный язык нужен для общения людей, а язык программирования — для общения с компьютером. Как и в любом естественном языке, тут есть лексика — слова, функции и операторы, из которых по правилам синтаксиса составляются выражения. Они имеют чёткий, вполне определённый смысл, понятный компьютеру, — семантику.</p>
            <p>Языки программирования используют в самых разных сферах. Кроме разработчиков, они нужны робототехникам, аналитикам, системным администраторам и иногда даже дизайнерам и редакторам.</p>
            <p>Тут у вас представлено 4 языка программирования:</p>


          </div>
        </div>

      </div>
    </section>
  </div>
  <nav class="container text-center">
    <router-link @click="scrollToTop()" to="/cscharp"><button type="button" class="btn btn-primary">C#</button></router-link>&nbsp;&nbsp;&nbsp;
    <router-link @click="scrollToTop()" to="/siplusplus"><button type="button" class="btn btn-primary">C++</button></router-link>&nbsp;&nbsp;&nbsp;
    <router-link @click="scrollToTop()" to="/javalanguages"><button type="button" class="btn btn-primary">Java</button></router-link>&nbsp;&nbsp;&nbsp;
    <router-link @click="scrollToTop()" to="/pythonlanguages"><button type="button" class="btn btn-primary">Python</button><br><br></router-link>&nbsp;&nbsp;&nbsp;
  </nav>
</template>

<script>

export default {
  name: "languages",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
p{
  font-size: 16px;
}
</style>