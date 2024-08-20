<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'

const form = reactive({
  id: '',
  title: '',
  organization: '',
  degree: '',
  jobType: '',
  locations: [],
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: ''
})

const toast = useToast()

const handleSubmit = async () => {
  const newJob = { ...form }

  try {
    console.log(newJob)
    const response = await axios.post('http://localhost:3000/jobs', newJob)
    toast.success('Job Added Successfully')
    router.push(`/jobs/results/${response.data.id}`)
  } catch (error) {
    console.error('Error fetching job', error)
    toast.error('Job Was Not Added')
  }
}
</script>

<template>
  <div class="container">
    <form class="form2" @submit.prevent="handleSubmit">
      <div class="form-title"><span>This is page</span></div>
      <div class="title-2"><span>Add Job</span></div>

      <section class="bg-stars">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </section>

      <div class="grid grid-cols-2 mb-4">
        <div class="col-span-1 col-start-1">
          <div class="input-container">
            <div class="form-title2">Id</div>
            <input
              placeholder="Id"
              type="text"
              name="id"
              id="id"
              v-model="form.id"
              class="input-mail"
            />

            <div class="form-title2">Organization</div>
            <input
              placeholder="Organization"
              type="text"
              name="organization"
              id="organization"
              v-model="form.organization"
              class="input-mail"
            />

            <div class="form-title2">Degree</div>
            <input
              placeholder="Degree"
              type="text"
              name="degree"
              id="degree"
              v-model="form.degree"
              class="input-mail"
            />

            <div class="form-title2">Job Type</div>
            <input
              placeholder="Job Type"
              type="text"
              name="jobType"
              id="jobType"
              v-model="form.jobType"
              class="input-mail"
            />

            <div class="form-title2">locations</div>
            <input
              placeholder="Locations"
              type="text"
              name="locations"
              id="locations"
              v-model="form.locations"
              class="input-mail"
            />
          </div>
        </div>

        <div class="col-span-1 col-start-2">
          <div class="input-container">
            <div class="form-title2">Title</div>
            <input
              placeholder="Title"
              type="text"
              name="title"
              id="title"
              v-model="form.title"
              class="input-mail"
            />

            <div class="form-title2">Minimum Qualifications</div>
            <input
              placeholder="Minimum Qualifications"
              type="text"
              name="minimumQualifications"
              id="minimumQualifications"
              v-model="form.minimumQualifications"
              class="input-mail"
            />

            <div class="form-title2">Preferred Qualifications</div>
            <input
              placeholder="Preferred Qualifications"
              type="text"
              name="preferredQualifications"
              id="preferredQualifications"
              v-model="form.preferredQualifications"
              class="input-mail"
            />

            <div class="form-title2">Description</div>
            <input
              placeholder="Description"
              type="text"
              name="description"
              id="description"
              v-model="form.description"
              class="input-mail"
            />

            <div class="form-title2">Date Added</div>
            <input
              placeholder="Date Added"
              type="text"
              name="dateAdded"
              id="dateAdded"
              v-model="form.dateAdded"
              class="input-mail"
            />
          </div>
        </div>
      </div>
      <button class="submit" type="submit">
        <span class="sign-text">Add job</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
.form2 {
  position: relative;
  display: block;
  padding: 1.2rem;
  max-width: 600px;
  background: linear-gradient(
      14deg,
      rgba(2, 0, 36, 0.8) 0%,
      rgba(24, 24, 65, 0.7) 66%,
      rgb(20, 76, 99) 100%
    ),
    radial-gradient(
      circle,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(32, 15, 53, 0.2) 65%,
      rgba(14, 29, 28, 0.9) 100%
    );
  border: 2px solid #fff;
  -webkit-box-shadow: rgba(0, 212, 255) 0px 0px 50px -15px;
  box-shadow: rgba(0, 212, 255) 0px 0px 50px -15px;
  overflow: hidden;
  z-index: +1;
  border-radius: 8px;
  transform: scale(1.3);
}

.form-title2 {
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-family: monospace;
  font-weight: 600;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}
</style>
