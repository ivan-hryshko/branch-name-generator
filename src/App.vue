<template>
  <div class="layout">
    <div class="header">
      Branch name generator
    </div>
    <div class="container">
      <div class="input">
        <div>
          <div class="input__title">
            Your name:
          </div>
          <input
            v-model="inputName"
            type="text"
            class="input__name"
          >
          /
        </div>
        <div class="input__title">
          Put your text here:
        </div>
        <textarea
          v-model="inputText"
          rows="10"
          class="input__text"
        />
      </div>
      <div class="result">
        <BlockResult
          :text="result"
        />
        <BlockResult
          :text="createNewBranch"
        />
        <BlockResult
          :text="gitPush"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { ref, computed, crea } from 'vue'
import BlockResult from '@/components/block-result'

export default {
  name: 'App',
  components: {
    BlockResult,
  },
  setup() {
    const inputName = ref('ihryshko')
    const inputText = ref('DT-4324 \n\n[FE]: Add Deploy`men\'t "tab", on home dashboard.')
    document.title = 'Branch name generator'
    const changedText = computed(() => {
      let newText = inputText.value.replaceAll(' ', '-')
      newText = newText.replaceAll('\n', '-')
      newText = newText.replaceAll('[', '-')
      newText = newText.replaceAll(']', '-')
      newText = newText.replaceAll('{', '-')
      newText = newText.replaceAll('}', '-')
      newText = newText.replaceAll('(', '-')
      newText = newText.replaceAll(')', '-')
      newText = newText.replaceAll('#', '-')
      newText = newText.replaceAll('$', '-')
      newText = newText.replaceAll('%', '-')
      newText = newText.replaceAll('+', '-')
      newText = newText.replaceAll(':', '-')
      newText = newText.replaceAll('=', '-')
      newText = newText.replaceAll('\`', '')
      newText = newText.replaceAll('\"', '-')
      newText = newText.replaceAll('\'', '')
      newText = newText.replaceAll('\?', '-')
      newText = newText.replaceAll('\!', '-')
      newText = newText.replaceAll('\.', '-')
      newText = newText.replaceAll('\,', '-')
      newText = newText.replaceAll('------', '-')
      newText = newText.replaceAll('-----', '-')
      newText = newText.replaceAll('----', '-')
      newText = newText.replaceAll('---', '-')
      newText = newText.replaceAll('--', '-')
      if (newText[newText.length - 1] === '-') {
        newText = newText.slice(0, -1)
      }
      return newText
    })

    const result = computed(() => {
      return `${inputName.value}/${changedText.value}`
    })

    const createNewBranch = computed(() => {
      return `git checkout -b ${result.value}`
    })

    const gitPush = computed(() => {
      return `git push --set-upstream origin testBranch ${result.value}`
    })

    return {
      inputName,
      inputText,
      changedText,
      result,
      createNewBranch,
      gitPush,
    }
  },
}
</script>

<style lang="scss">
@import url(App.scss);
</style>
