<template>
  <div class="sidebar">
    <div class="sidebar-inner d-flex flex-column">
      <div class="px-4 py-5">
        <NuxtLink to="/" href=""
          ><img :src="websiteLogoLink" alt="" width="90"
        /></NuxtLink>
      </div>
      <sidebar-menu></sidebar-menu>
      <div class="px-4 py-3">
        <ul class="list-inline list-social mb-3">
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.instagram.com/dgmichaelg/"
              target="blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <!-- <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.linkedin.com/in/mariaescribe/"
              target="blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li> -->
          <li class="list-inline-item">
            <a
              class="reset-anchor"
              href="https://www.behance.net/dgmichaelgcd12/projects"
              target="blank"
            >
              <i class="fab fa-behance"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="reset-anchor" href="mailto:dgmichaelg@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PageSidebar',
  data() {
    return {
      websiteLogoLink: '',
    }
  },
  async fetch() {
    try {
      const logo = await this.$content('global').only(['logo']).fetch()

      this.websiteLogoLink = logo[0].logo
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>

