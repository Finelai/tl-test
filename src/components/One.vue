<template>
  <div class="one">
    <h1>Задание №1 калькулятор дробей</h1>

    <div class="calc">
      <div v-for="(item, index) in toCalc" :key="index">
        <div v-if="item.inc1 && item.inc2" class="calc__fraction">
          <input class="calc__input" v-validate="{ regex: /^\d+$/, max:3, min:1 }" type="text" v-model="toCalc[index].inc1">
          <hr>
          <input class="calc__input" v-validate="{ regex: /^\d+$/, max:3, min:1 }" type="text" v-model="toCalc[index].inc2">
        </div>
        <input class="calc__input calc__arithmetic" v-validate="{ regex: /[-+/*]+/, max:1, min:1 }" v-else type="text" v-model="toCalc[index].arithmetic">
      </div>
      <div class="calc__equally">
        <div>||</div>
      </div>
      <div class="calc__result">
        <input class="calc__input" type="text" v-model="result1" disabled>
        <hr>
        <input class="calc__input" type="text" v-model="result2" disabled>
      </div>
    </div>

    <div v-for="(error, index) in errors.items" :key="index">
      <span>{{ error.msg }}</span>
    </div>

    <button class="calc__add-fraction" @click="addFraction">add fraction</button>
  </div>
</template>

<script>
export default {
  name: 'math',
  data () {
    return {
      toCalc: [
        {
          inc1: 1,
          inc2: 2,
        },
      ],
      result1: 0,
      result2: 0,
    }
  },
  mounted() {
    this.toCalc.push({
        arithmetic: '+',
    },
    {
      inc1: 1,
      inc2: 3,
    });
  },
  watch: {
    toCalc: {
      handler: function (val, oldVal) {
        let math = '';
        let prev1 = 0;
        let prev2 = 0;
        const setResult = (results) => {
          prev1 = results[0];
          prev2 = results[1];
          this.result1 = results[0];
          this.result2 = results[1];
        };
        for (let n = 0; n < val.length; n++) {
          // проверяем это объект арифметический знак или дробь (значение дроби больше 0)
          if (val[n].arithmetic) {
            // если это арифметический знак, то записываем его в math
            math = val[n].arithmetic;
          } else if(val[n].inc1 > 0) {
            // если объект дробь, то проверяем есть ли знак
            if (math === '') {
              // если знака нет, то записываем дробь в прев
              prev1 = val[n].inc1;
              prev2 = val[n].inc2;
            } else if (math === '+' || math === '-') {
              // если знак есть, то в зависимости от знака вызываем функцию и передаем в аргументы прев и текущую дробь
              // полученные значения записываем в прев и результат
              setResult(this.math(math, prev1, prev2, val[n].inc1, val[n].inc2));
            } else if (math === '*') {
              setResult(this.mathMult(prev1, prev2, val[n].inc1, val[n].inc2));
            } else if (math === '/') {
              setResult(this.mathDev(prev1, prev2, val[n].inc1, val[n].inc2));
            }
          }
        }
      },
      deep: true
    },
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
    math(type, a1, a2, b1, b2) {
      let result = [];
      let a2b2 = 1.25;
      let b2a2 = 1.25;

      if (a2 > b2) {

        for (let n = 1; n > 0; n++) {
          if (this.isInt(a2b2)) {
            n--;
            result[0] = (type === '+') ? (a1 * n) + (b1 * a2b2) : (a1 * n) - (b1 * a2b2);
            result[1] = a2 * n;
            n = -1;
          } else {
            a2b2 = a2 * n / b2;
          }
        }

      } else if (b2 > a2) {

        for (let n = 1; n > 0; n++) {
          if (this.isInt(b2a2)) {
            n--;
            result[0] = (type === '+') ? (a1 * b2a2) + (b1 * n) : (a1 * b2a2) - (b1 * n);
            result[1] = b2 * n;
            n = -1;
          } else {
            b2a2 = b2 * n / a2;
          }
        }

      } else if (a2 === b2) {
        result[0] = (type === '+') ? a1 + b1 : a1 - b1;
        result[1] = a2;
      } else {
        result = 'error';
      }

      return result;
    },
    mathMult(a1, a2, b1, b2) {
      return [a1 * b1, a2 * b2];
    },
    mathDev(a1, a2, b1, b2) {
      return [a1 * b2, a2 * b1];
    },
    isInt(n) {
      return Number(n) === n && n % 1 === 0;
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

  &__add-fraction {
    font-size: 14px;
    text-transform: uppercase;
  }
}


</style>
