<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="../assets/img/profile.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div v-if="currentUser" class="h-100">
            <h5 class="mb-1">{{ currentUser.user.name }}</h5>
            <p class="mb-0 text-sm font-weight-bold">
              {{ currentUser.user.role }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-auto my-auto">
        <div v-if="currentUser" class="h-100">
          <p class="mb-0 text-sm font-weight-bold">
            User Name: {{ currentUser.user.userName }}
          </p>
          <p class="mb-0 text-sm font-weight-bold">
            Phone Number: {{ currentUser.user.phoneNumber }}
          </p>
          <p class="mb-0 text-sm font-weight-bold">
            Gender: {{ currentUser.user.gender }}
          </p>
          <p class="mb-0 text-sm font-weight-bold">
            Medical History: {{ currentUser.user.medicalHistory }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VsudSwitch from '@/components/VsudSwitch.vue';
  import ProfileCard from './components/ProfileCard.vue';
  import VsudAvatar from '../components/VsudAvatar.vue';
  import sophie from '@/assets/img/kal-visuals-square.jpg';
  import marie from '@/assets/img/marie.jpg';
  import ivana from '@/assets/img/ivana-square.jpg';
  import peterson from '@/assets/img/team-4.jpg';
  import nick from '@/assets/img/team-3.jpg';
  import img1 from '@/assets/img/home-decor-1.jpg';
  import img2 from '@/assets/img/home-decor-2.jpg';
  import img3 from '@/assets/img/home-decor-3.jpg';
  import team1 from '@/assets/img/team-1.jpg';
  import team2 from '@/assets/img/team-2.jpg';
  import team3 from '@/assets/img/team-3.jpg';
  import team4 from '@/assets/img/team-4.jpg';

  import ProjectsCard from './components/ProjectOverviewCard.vue';

  import setNavPills from '@/assets/js/nav-pills.js';
  import setTooltip from '@/assets/js/tooltip.js';

  export default {
    name: 'profile-overview',
    data() {
      return {
        showMenu: false,
        sophie,
        marie,
        ivana,
        peterson,
        nick,
        img1,
        team1,
        team2,
        team3,
        team4,
        img2,
        img3,
      };
    },
    components: {
      VsudSwitch,
      ProfileCard,
      VsudAvatar,
      ProjectsCard,
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    },
    mounted() {
      this.$store.state.isAbsolute = true;
      this.$store.state.isNavFixed = false;
      setNavPills();
      setTooltip();
    },
    beforeUnmount() {
      this.$store.state.isAbsolute = false;
    },
  };
</script>
