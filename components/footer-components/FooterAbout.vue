<template>
  <div class="col-lg-4 mb-4 mb-lg-0">
    <h2 class="h4 text-white mb-4">Sobre mí</h2>

    <nuxt-content class="text-small" :document="aboutmeText"></nuxt-content>

    <ul class="list-unstyled text-small mb-0 text-white">
      <li class="mb-1">
        <a class="reset-anchor" href="mailto:dgmichaelg@gmail.com">
          <i class="fas fa-envelope text-muted mr-2 fa-fw"></i
          >dgmichaelg@gmail.com
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FooterAbout',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    aboutmeText: {
      type: Object,
    },
  },
}
</script>
