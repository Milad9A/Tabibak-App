<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template v-slot:icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Subjects" :to="{ name: 'Subjects' }">
          <template v-slot:icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Profile" :to="{ name: 'Profile' }">
          <template v-slot:icon>
            <icon name="customer-support" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Sign In" :to="{ name: 'Sign In' }">
          <template v-slot:icon>
            <icon name="sign-in" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Sign Up" :to="{ name: 'Sign Up' }">
          <template v-slot:icon>
            <icon name="sign-up" />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
  import Icon from '@/components/Icon.vue';
  import SidenavCollapse from './SidenavCollapse.vue';

  export default {
    name: 'SidenavList',
    props: {
      cardBg: String,
    },
    data() {
      return {
        title: 'Soft UI Dashboard PRO',
        controls: 'dashboardsExamples',
        isActive: 'active',
      };
    },
    components: {
      Icon,
      SidenavCollapse,
    },
    methods: {
      getRoute() {
        const routeArr = this.$route.path.split('/');
        return routeArr[1];
      },
    },
  };
</script>
