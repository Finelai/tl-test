<template>
  <div class="two">
    <h1>Задание №2 Взаимодействие с сервером по протоколу websocket</h1>

    <div class="comments">
      <div class="comments__one-comment" v-for="(comment, index) in comments" :key="index">
        <span>{{ comment.body }}</span>
        <button @click="deleteComment(comment.id)">Удалить</button>
      </div>
      <div>
        <hr>
        <button @click="deleteAllcomments">Удалить все</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import store from '../store';
Vue.use(VueNativeSock, 'ws://echo.websocket.org/', { store: store });

export default {
  name: 'comments',
  computed: {
    comments() {
      return store.getters.getComments;
    }
  },
  methods: {
    deleteComment(num) {
      this.$socket.send(num);
    },
    deleteAllcomments() {
      this.$socket.send(1);
      this.$socket.send(2);
      this.$socket.send(3);
      this.$socket.send(4);
      this.$socket.send(5);
      this.$socket.send(6);
      this.$socket.send(7);
      this.$socket.send(8);
      this.$socket.send(9);
      this.$socket.send(10);
    },
  },
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  .comments {
    max-width: 320px;
    margin: 0 auto;
    
    &__one-comment {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      &:nth-child(odd) {
        background-color: #f6f6f6;
      }
    }
  }
</style>
