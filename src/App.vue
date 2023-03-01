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
            v-model="selectedMode"
            type="radio"
            value="branch"
            style="margin-left:20px"
          >
          <div>
            Branch
          </div>
          <input
            v-model="selectedMode"
            type="radio"
            value="variables"
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
        <div
          v-if="isShowBranch"
          class="block-result-wrapper"
        >
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
        <div
          v-if="isShowVariables"
          class="block-result-wrapper"
        >
          <BlockResult
            :text="toUpperConst"
          />
          <BlockResult
            :text="toUpperConstWithValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, computed, watch } from 'vue'
import BlockResult from '@/components/block-result'
import ImagePaste from '@/assets/image-paste.vue'

const MODE_VALUE = {
  BRANCH: 'branch',
  VARIABLES: 'variables',
}

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
    const selectedMode = ref(MODE_VALUE.VARIABLES)

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

    const isShowBranch = computed(() => {
      return selectedMode.value === 'branch'
    })

    const isShowVariables = computed(() => {
      return selectedMode.value === 'variables'
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
      upperConst = upperConst.replaceAll('-', '')
      upperConst = upperConst.toUpperCase()
      return upperConst
    })

    const toUpperConstWithValue = computed(() => {
      let upperConst = inputText.value
      console.log('upperConst :>> ', upperConst);
      const letterToUpper = []
      for (const letter of upperConst) {
        if (letter === letter.toUpperCase()) {
          if (!letterToUpper.includes(letter)) {
            letterToUpper.push(letter)
          }
        }
      }
      upperConst = upperConst.replaceAll('-', '')
      upperConst = upperConst.toUpperCase()
      const resultUpperWithValue = `${upperConst}: '${inputText.value}'`
      return resultUpperWithValue
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
      toUpperConstWithValue,
      isCopyBranch,
      isCopyUpperCase,
      createNewBranch,
      selectedMode,
      isShowBranch,
      isShowVariables,
      pasteText,
    }
  },
}
</script>

<style lang="scss">
@import url(App.scss);
// @import url(@/assets/scss/styles.scss);

.result {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: flex-end;

  .block-result-wrapper {
    width: 100%;
  }
}

</style>
