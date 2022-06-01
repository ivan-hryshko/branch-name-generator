<template>
  <div class="layout">
    <div class="container">
      <div class="input">
        <input type="text"
          v-model="inputName"
          class="input__name"
        >
        <textarea
          v-model="inputText"
          cols="30"
          rows="10"
          class="input__text"
  
        >
  
        </textarea>

      </div>
      <div class="result">
        <div class="result__title">
          result
        </div>
        <div>
          {{ inputName }}/{{ changedText }}
  
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const inputName = ref('ihryshko')
    const inputText = ref('DT-4324 \n\n[FE]: Add Deploy`men\'t "tab", on home dashboard.')

    const changedText = computed(() => {
      let newText = inputText.value.replaceAll(' ', '-');
      newText = newText.replaceAll('\n', '-');
      return newText
    })

    return {
      inputName,
      inputText,
      changedText,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: auto;
  align-items: center;
}

.input{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
}

.input__name {
  width: 100px;
  margin-bottom: 20px;
}

.input__text {
  margin-bottom: 20px;
}

.result {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
}

.result__title {
  margin-bottom: 20px;
}


</style>
