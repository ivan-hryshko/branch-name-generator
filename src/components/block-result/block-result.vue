<template>
  <div class="result__block">
    <div
      class="result__value"
      @click="copyURL(text)"
    >
      {{ text }}
    </div>
    <ImageCopy
      @click="copyURL(text)"
    />
  </div>
</template>

<script>
import ImageCopy from '@/assets/image-copy.vue'

export default {
  name: 'BlockResult',
  components: {
    ImageCopy,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup() {
    function copyURL(value) {
      // document.execCommand('copy')
      navigator.clipboard.writeText(value).then(() => {
        /* clipboard successfully set */
      }, () => {
        /* clipboard write failed */
      })
    }

    return {
      copyURL,
    }
  },
}
</script>
