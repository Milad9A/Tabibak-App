<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body"
              ><i class="fas fa-search" aria-hidden="true"></i
            ></span>
            <input
              type="text"
              class="form-control"
              :placeholder="
                this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
              "
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <vsud-button
              v-if="currentUser"
              color="dark"
              fullWidth
              variant="gradient"
              @click.prevent="logOut"
              >Logout</vsud-button
            >
            <router-link
              v-else
              :to="{ name: 'Sign In' }"
              class="px-0 nav-link font-weight-bold"
              :class="textWhite ? textWhite : 'text-body'"
            >
              <i
                class="fa fa-user"
                :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              ></i>
              <span class="d-sm-inline d-none">Sign In</span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body"
              id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import Breadcrumbs from '../Breadcrumbs.vue';
  import VsudButton from '@/components/VsudButton.vue';
  import { mapMutations, mapActions } from 'vuex';

  export default {
    name: 'navbar',
    data() {
      return {
        showMenu: false,
      };
    },
    props: ['minNav', 'textWhite'],
    created() {
      this.minNav;
    },
    methods: {
      ...mapMutations(['navbarMinimize', 'toggleConfigurator']),
      ...mapActions(['toggleSidebarColor']),

      toggleSidebar() {
        this.toggleSidebarColor('bg-white');
        this.navbarMinimize();
      },
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/');
      },
    },
    components: {
      Breadcrumbs,
      VsudButton,
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      currentRouteName() {
        return this.$route.name;
      },
    },
    updated() {
      const navbar = document.getElementById('navbarBlur');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10 && this.$store.state.isNavFixed) {
          navbar.classList.add('blur');
          navbar.classList.add('position-sticky');
          navbar.classList.add('shadow-blur');
        } else {
          navbar.classList.remove('blur');
          navbar.classList.remove('position-sticky');
          navbar.classList.remove('shadow-blur');
        }
      });
    },
  };
</script>
