import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [
      {
        id: 1,
        body: 'Тестовый коммент 1',
      },
      {
        id: 2,
        body: 'Это шедевр',
      },
      {
        id: 3,
        body: 'Это прекрасно',
      },
      {
        id: 4,
        body: 'Лучшее, что я видел',
      },
      {
        id: 5,
        body: 'Два чая этому автору',
      },
      {
        id: 6,
        body: 'Великолепно',
      },
      {
        id: 7,
        body: 'Мне это нравится',
      },
      {
        id: 8,
        body: 'Вот это да!',
      },
      {
        id: 9,
        body: 'У меня нет слов',
      },
      {
        id: 10,
        body: 'Сильно',
      },
    ],
    socket: {
      isConnected: false,
      message: '',
    },
  },
  getters: {
    getComments(state) {
      return state.comments.map(item => {
        return item;
      });
    },
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      state.socket.isConnected = true;
      console.log('socket connected');
    },
    SOCKET_ONCLOSE (state, event) {
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event);
    },
    SOCKET_ONMESSAGE (state, message) {
      state.message = message;
      for (let n = 0; n < state.comments.length; n++) {
        if (state.comments[n].id == message.data) {
          state.comments.splice(n, 1);
        }
      }
    },
  },
})