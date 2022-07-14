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
        <div class="input__title-header">
          <div class="input__title">
            Put your text here:
          </div>
          <ImagePaste
            @click="pasteText"
          />
          <input
            v-model="isCopyBranch"
            type="checkbox"
            style="margin-left:20px"
          >
          <div>
            Branch
          </div>
          <input
            v-model="isCopyUpperCase"
            type="checkbox"
            style="margin-left:20px"
          >
          <div>
            UpperCase
          </div>
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
        <BlockResult
          :text="toUpperConst"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { ref, computed, watch } from 'vue'
import BlockResult from '@/components/block-result'
import ImagePaste from '@/assets/image-paste.vue'

export default {
  name: 'App',
  components: {
    BlockResult,
    ImagePaste,
  },
  setup() {
    const inputName = ref('ihryshko')
    const inputText = ref('DT-4324 \n\n[FE]: Add Deploy`men\'t "tab", on home dashboard.')
    const isCopyBranch = ref(true)
    const isCopyUpperCase = ref(false)

    watch(() => isCopyBranch.value, () => {
      if (isCopyBranch.value === true) {
        isCopyUpperCase.value = false
      }
    })

    watch(() => isCopyUpperCase.value, () => {
      if (isCopyUpperCase.value === true) {
        isCopyBranch.value = false
      }
    })
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

    const toUpperConst = computed(() => {
      let upperConst = inputText.value
      const letterToUpper = []
      for (const letter of upperConst) {
        if (letter === letter.toUpperCase()) {
          if (!letterToUpper.includes(letter)) {
            letterToUpper.push(letter)
          }
        }
      }
      letterToUpper.forEach(letter => {
        upperConst = upperConst.replaceAll(letter, `_${letter}`)
      })
      upperConst = upperConst.replaceAll('-', '')
      upperConst = upperConst.toUpperCase()
      return upperConst
    })

    function pasteText() {
      navigator.clipboard.readText()
        .then(text => {
          inputText.value = text
          // `text` содержит текст, прочитанный из буфера обмена
        })
        .catch(err => {
          // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
        })
      if (isCopyBranch.value) {
        copyURL(result.value)
      }
      if (isCopyUpperCase.value) {
        copyURL(toUpperConst.value)
      }
    }

    function copyURL(value) {
      // document.execCommand('copy')
      navigator.clipboard.writeText(value).then(() => {
        /* clipboard successfully set */
      }, () => {
        /* clipboard write failed */
      })
    }

    return {
      result,
      gitPush,
      inputName,
      inputText,
      toUpperConst,
      isCopyBranch,
      isCopyUpperCase,
      createNewBranch,
      pasteText,
    }
  },
}
</script>

<style lang="scss">
@import url(App.scss);
@import url(@/assets/scss/styles.scss);

</style>
