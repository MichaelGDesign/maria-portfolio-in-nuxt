<template>
  <div class="col-lg-5 position-sticky">
    <h2>Concepto</h2>
    <p class="text-muted">{{ desc }}</p>
    <div class="p-4 bg-light mb-5">
      <ul class="list-unstyled mb-0">
        <li class="d-flex">
          <h6 class="mb-0">Tags:</h6>
          <p class="ml-3 text-muted mb-0">
            <component :is="joinTags" />
          </p>
        </li>
      </ul>
    </div>
    <h2 class="h3 mb-4">Contacto</h2>
    <ul class="list-inline space-below">
      <li class="list-inline-item">
        <a
          class="reset-anchor social-share-link instagram"
          href="https://www.instagram.com/dgmichaelg/"
          target="blank"
          translate="no"
        >
          <i class="fab fa-instagram mr-2"></i>Instagram
        </a>
      </li>
      <!-- <li class="list-inline-item">
        <a
          class="reset-anchor social-share-link linkedin"
          href="https://www.linkedin.com/in/mariaescribe/"
          target="blank"
          translate="no"
        >
          <i class="fab fa-linkedin mr-2"></i>LinkedIn
        </a>
      </li> -->
      <li class="list-inline-item">
        <a
          class="reset-anchor social-share-link behance"
          href="https://www.behance.net/dgmichaelgcd12/projects"
          target="blank"
          translate="no"
        >
          <i class="fab fa-behance mr-2"></i>Behance
        </a>
      </li>
      <li class="list-inline-item">
        <a
          class="reset-anchor social-share-link envelope"
          href="mailto:dgmichaelg@gmail.com"
        >
          <i class="fas fa-envelope mr-2"></i>Correo
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailDescription',
  props: {
    desc: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    joinTags() {
      // eslint-disable-next-line no-console
      let tagsButtonsTemplate = this.tags
        .map((tag) => {
          /**
           * The link variable has to match with the paths available in the routes
           */
          const link = this.convertTagToLink(tag)

          return `<NuxtLink class="reset-anchor" to="/${link}">${tag}</NuxtLink>`
        })
        .join(', ')

      tagsButtonsTemplate = `<span>${tagsButtonsTemplate}</span>`

      return {
        name: 'TagsComponent',
        template: tagsButtonsTemplate,
      }
    },
  },
  methods: {
    convertTagToLink(tagString) {
      return tagString.toLowerCase().split(' ').join('-')
    },
  },
}
</script>
