<template>
  <div class="two">
    <h1>Задание №2 Взаимодействие с сервером по протоколу websocket</h1>

    <div class="comments">
      <div class="comments__one-comment" v-for="(comment, index) in comments" :key="index">
        <span>{{ comment.body }}</span>
        <button @click="deleteComment(comment.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      comments: [
        {
          id: `0${Math.floor(Math.random() * 10) + 1}`,
          body: 'Тестовый коммент 1',
        },
        {
          id: `1${Math.floor(Math.random() * 10) + 1}`,
          body: 'Это шедевр',
        },
        {
          id: `2${Math.floor(Math.random() * 10) + 1}`,
          body: 'Это прекрасно',
        },
        {
          id: `3${Math.floor(Math.random() * 10) + 1}`,
          body: 'Лучшее, что я видел',
        },
        {
          id: `4${Math.floor(Math.random() * 10) + 1}`,
          body: 'Два чая этому автору',
        },
        {
          id: `5${Math.floor(Math.random() * 10) + 1}`,
          body: 'Великолепно',
        },
        {
          id: `6${Math.floor(Math.random() * 10) + 1}`,
          body: 'Мне это нравится',
        },
        {
          id: `7${Math.floor(Math.random() * 10) + 1}`,
          body: 'Вот это да!',
        },
        {
          id: `8${Math.floor(Math.random() * 10) + 1}`,
          body: 'У меня нет слов',
        },
        {
          id: `9${Math.floor(Math.random() * 10) + 1}`,
          body: 'Сильно',
        },
      ],
    }
  },
  methods: {
    deleteComment(num) {
      console.log(num);
      for (let n = 0; n < this.comments.length; n++) {
        console.log(this.comments[n].id);
        if (this.comments[n].id === num) {
          this.comments.splice(n, 1);
          console.log(this.comments);
        }
      }
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
