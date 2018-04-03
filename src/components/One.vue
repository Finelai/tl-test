<template>
  <div class="one">
    <h1>Задание №1 калькулятор дробей</h1>

    <div class="calc">
      <div v-for="(item, index) in toCalc" :key="index">
        <div v-if="item.inc1 && item.inc2" class="calc__fraction">
          <input class="calc__input" type="text" v-model="toCalc[index].inc1">
          <hr>
          <input class="calc__input" type="text" v-model="toCalc[index].inc2">
        </div>
        <input class="calc__input calc__arithmetic" v-else type="text" v-model="toCalc[index].arithmetic">
      </div>
      <div class="calc__equally">
        <div>||</div>
      </div>
      <div class="calc__result">
        <input class="calc__input" type="text" v-model="result1">
        <hr>
        <input class="calc__input" type="text" v-model="result2">
      </div>
    </div>

    <button @click="addFraction">add fraction</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      toCalc: [
        {
          inc1: 1,
          inc2: 2,
        },
        {
          arithmetic: '+',
        },
        {
          inc1: 1,
          inc2: 2,
        }
      ],
      result1: 0,
      result2: 0,
    }
  },
  methods: {
    addFraction() {
      this.toCalc.push({
        arithmetic: '+',
      },
      {
        inc1: 1,
        inc2: 2,
      });
    },
  },
}
</script>

<style lang="scss" scoped>

.one {
  text-align: center;
}

.calc {
  text-align: left;
  margin: 0 auto;
  font-size: 0;
  display: flex;
  justify-content: center;

  &__input {
    border: 5px solid black;
    border-radius: 10px;
    width: 100px;
    height: 150px;
    margin: 10px;
    font-size: 50px;
    text-align: center;
  }

  &>input {
    &:last-child {
      margin-left: 130px;
    }
  }

  &__arithmetic {
    display: inline-block;
    background-color: #ffffff;
    position: relative;
    top: 95px;
  }

  &__equally {
    display: inline-block;
    background-color: #ffffff;
    width: 120px;
    position: relative;
    top: 195px;

    &>div {
      transform: rotate(90deg);
      font-size: 50px;
      line-height: 50px;
    }
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 5px solid black;
  }
}


</style>
