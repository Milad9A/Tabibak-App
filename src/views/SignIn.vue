<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btnBackground="bg-gradient-success"
          v-bind:darkMode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <!-- <Form @submit="handleLogin" class="text-start">
                    <label>Email</label>
                    <vsud-input type="email" placeholder="Email" name="email" />
                    <label>Password</label>
                    <vsud-input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />

                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        :aria-disabled="loading"
                        fullWidth
                      >
                        <span
                          v-show="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        <span v-show="!loading">Sign IN</span>
                      </vsud-button>
                    </div>
                  </Form> -->
                  <Form @submit="handleLogin" :validation-schema="schema">
                    <div class="form-group">
                      <label for="username">Username</label>
                      <Field name="username" type="text" class="form-control" />
                      <ErrorMessage name="username" class="error-feedback" />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        class="form-control"
                      />
                      <ErrorMessage name="password" class="error-feedback" />
                    </div>

                    <div class="form-group">
                      <button
                        class="btn btn-primary btn-block"
                        :disabled="loading"
                      >
                        <span
                          v-show="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        <span>Login</span>
                      </button>
                    </div>

                    <div class="form-group">
                      <div
                        v-if="message"
                        class="alert alert-danger"
                        role="alert"
                      >
                        {{ message }}
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                      class="text-info text-gradient font-weight-bold"
                      to="/sign-up"
                    >
                      <i
                        aria-hidden="true"
                        :class="isBlur ? 'text-dark' : 'text-white'"
                      ></i>
                      Sign Up
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
              >
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/curved9.jpg') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
  import Navbar from '@/examples/PageLayout/Navbar.vue';
  import AppFooter from '@/examples/PageLayout/Footer.vue';
  import VsudInput from '@/components/VsudInput.vue';
  import VsudButton from '@/components/VsudButton.vue';
  const body = document.getElementsByTagName('body')[0];
  import * as yup from 'yup';

  export default {
    name: 'signin',
    components: {
      Navbar,
      AppFooter,
      VsudInput,
      VsudButton,
    },
    data() {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Email is invalid')
          .required('Email is required!'),
        password: yup
          .string()
          .required('Password is required!')
          .min(6, 'Must be at least 6 characters!')
          .max(40, 'Must be maximum 40 characters!'),
      });

      return {
        loading: false,
        message: '',
        schema,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleLogin(user) {
        this.loading = true;

        this.$store.dispatch('auth/login', user).then(
          () => {
            this.$router.push('/profile');
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      },
    },
    beforeMount() {
      this.$store.state.hideConfigButton = true;
      this.$store.state.showNavbar = false;
      this.$store.state.showSidenav = false;
      this.$store.state.showFooter = false;
      body.classList.remove('bg-gray-100');
    },
    beforeUnmount() {
      this.$store.state.hideConfigButton = false;
      this.$store.state.showNavbar = true;
      this.$store.state.showSidenav = true;
      this.$store.state.showFooter = true;
      body.classList.add('bg-gray-100');
    },
  };
</script>
