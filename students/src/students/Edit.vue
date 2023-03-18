

<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h2>Edit Student</h2>
      </div>
      <RouterLink to="/StudentsList" style="display: none;" id="list" class="text-decoration-none"><button class="btn btn-success">Add
                            Student</button></RouterLink>
      <div class="card-body">
        <Form @submit="updatedata">
          <div class="mb-3 d-grid">
            <label for="">First Name</label>
            <Field name="firstname" type="text" v-model="model.data.first_name" :rules="isRequired" />
            <ErrorMessage name="firstname" class="text-danger" />
          </div>
          <div class="mb-3 d-grid">
            <label for="">Last Name</label>
            <Field name="lastname" type="text" v-model="model.data.last_name" :rules="isRequired" />
            <ErrorMessage name="firstname" class="text-danger" />
          </div>
          <div class="mb-3 d-grid">
            <label for="">Email</label>
            <Field name="email" type="email" v-model="model.data.email" />
            <ErrorMessage name="email" class="text-danger" />
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </Form>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  name: 'edit',
  data() {
    return {
      studentId: '',
      model: {
        data: {
          id: '',
          first_name: '',
          last_name: '',
          email: '',
          avatar: '',
        }
      }
    }
  },

  mounted() {
    this.studentId = this.$route.params.id
    this.getstudents(this.$route.params.id)
  },

  methods: {
    getstudents(studentId) {
      axios.get(`https://reqres.in/api/users/${studentId}`).then((res) => {
        console.log(res.data.data);

        this.model.data = res.data.data
      })
    },

    updatedata() {
      axios.put(`https://reqres.in/api/users/${this.studentId}`, this.model.data).then(res => {
        alert('Your detail Edited successfully.');
        document.getElementById('list').click();
        this.model.data = {
          id: '',
          first_name: '',
          last_name: '',
          email: '',
        }
      })
    },
    isRequired(value) {
            if (!value) {
                return 'This field is required';
            }

            return true;
        },
        validateEmail(value) {
            if (!value) {
                return 'This field is required';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        }
  }
}


</script>