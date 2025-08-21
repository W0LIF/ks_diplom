<template>
    <div class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Быстрые ссылки</h3>
                <router-link @click="scrollToTop()" to="/"> <i class="fas fa-arrow-right"></i> Главная</router-link>
                <router-link @click="scrollToTop()" to="/languages"> <i class="fas fa-arrow-right"></i>Языки программирования</router-link>
                <router-link @click="scrollToTop()" to="/games"> <i class="fas fa-arrow-right"></i>Создание игр</router-link>
            </div>
            <div class="box">
                <h3>Дополнительные ссылки</h3>
                  <div v-if="!user"  @click="showLog">
                        <router-link @click="scrollToTop()" to="/login"><i class="fas fa-arrow-right"></i>Войти</router-link>
                        <router-link @click="scrollToTop()" to="/register"><i class="fas fa-arrow-right"></i>Регистрация</router-link>
                  </div>

                  <div v-else  @click="showLog">
                        <router-link @click="scrollToTop()" to="/myorder"><i class="fas fa-arrow-right"></i>Личный кабинет</router-link>
                        <router-link @click="handleLogout" to="/"><i class="fas fa-arrow-right">Выйти</i></router-link>
                  </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'FooterComponent',

    computed: {
        ...mapState(['user'])
    },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    ...mapMutations(["setUser"]),

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    showNav: function () {
      let navbar = document.querySelector('.header .navbar');
      navbar.classList.toggle('active');
    },

    showLog: function () {
      let mq = window.matchMedia("(max-width: 768px)");
      if (mq.matches) {
        let log = document.querySelector('.drop-down-select');
        log.classList.toggle('active');
      }
    },

    handleScroll: function () {
      let navbar = document.querySelector('.header .navbar');
      navbar.classList.remove('active');
      let log = document.querySelector('.drop-down-select');
      log.classList.remove('active');
    },

    handleLogout: function () {
      this.setUser("");
    }
  }
}
</script>

<style scoped>
/* footer */
.footer {
    background: #f7f7f7;
    padding: 2rem 9%;
}

.footer .news-letter {
    text-align: center;
    margin-bottom: 2rem;
}

.footer .news-letter h3 {
    font-size: 2.5rem;
    color: #130f40;
    padding-bottom: 1rem;
}

.footer .news-letter form {
    max-width: 70rem;
    margin: 1rem auto;
    max-width: 70rem;

    display: flex;
    border-radius: .5rem;
    overflow: hidden;
}

.footer .news-letter form input[type="email"] {
    height: 100%;
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
}

.footer .news-letter form input[type="submit"] {
    padding: 0 2rem;
    font-size: 1.6rem;
    color: #fff;
    background: black;
    cursor: pointer;
}

.footer .news-letter form input[type="submit"]:hover {
    background: #130f40;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
}

.footer .box-container .box h3 {
    font-size: 2.2rem;
    color: #130f40;
    padding: 1rem 0;
}

.footer .box-container .box p {
    font-size: 1.4rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a {
    display: block;
    font-size: 1.4rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a:hover {
    color: black;
}

.footer .box-container .box a:hover i {
    padding-right: 2rem;
}

.footer .box-container .box a i {
    padding-right: .5rem;
    color: black;
}

.footer .bottom {
    padding-top: 1rem;
    text-align: center;
}

.footer .bottom .share {
    margin: 1.5rem 0;
}

.footer .bottom .share a {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    border-radius: .5rem;
    margin: 0 .3rem;
    color: #fff;
    background: black;
}

.footer .bottom .share a:hover {
    background: #130f40;
}

@media (max-width: 576px) {
    .footer .box-container {

        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    }

}
</style>