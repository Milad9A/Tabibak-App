<template>
  <div v-if="loading" class="mx-auto" style="width: 200px">
    <span class="spinner-border spinner-border-lg"></span>
  </div>
  <div v-else class="card mb-4">
    <div class="card-header pb-0">
      <h6>Subjects Table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Title
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Body
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created By
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Last Updated
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subject in subjects" :key="subject.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="subject.image"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ subject.title }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p
                  class="text-xs font-weight-bold mb-0"
                  style="
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 200px;
                  "
                >
                  {{ subject.body }}
                </p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-secondary text-xs font-weight-bold">{{
                  subject.user.name
                }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">
                  {{ moment(subject.updatedAt).format('DD/MM/YYYY') }}
                </span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import VsudAvatar from '@/components/VsudAvatar.vue';
  import VsudBadge from '@/components/VsudBadge.vue';
  import moment from 'moment';
  import SubjectService from '@/services/subject.service';

  export default {
    name: 'subjects-table',
    data() {
      return {
        loading: false,
        subjects: [],
      };
    },
    mounted() {
      this.loading = true;
      SubjectService.getSubjects().then(
        (response) => {
          this.loading = false;

          this.subjects = response.data;
        },
        (error) => {
          this.loading = false;

          this.subjects =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    methods: {
      moment: function () {
        return moment();
      },
    },
    components: {
      VsudAvatar,
      VsudBadge,
    },
  };
</script>
