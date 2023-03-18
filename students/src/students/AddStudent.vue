

<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h2>Add Student</h2>
            </div>
            <RouterLink to="/StudentsList" style="display: none;" id="list" class="text-decoration-none"><button class="btn btn-success">Add
                            Student</button></RouterLink>
            <div class="card-body">
                <Form @submit="savedata">
                    <div class="mb-3 d-grid">
                        <label for="">First Name</label>
                        <Field name="firstname" type="text" v-model="model.data.first_name" :rules="isRequired" />
                        <ErrorMessage name="firstname" class="text-danger" />
                    </div>
                    <div class="mb-3 d-grid">
                        <label for="">Last Name</label>
                        <Field name="lastname" type="text" v-model="model.data.last_name" :rules="isRequired" />
                        <ErrorMessage name="lastname" class="text-danger" />
                    </div>
                    <div class="mb-3 d-grid">
                        <label for="">Email</label>
                        <Field name="email" type="email" v-model="model.data.email" :rules="validateEmail" />
                        <ErrorMessage name="email" class="text-danger" />
                    </div>
                    <button :disabled="!model.data.email" type="submit" class="btn btn-primary">Save</button>
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
    name: 'addstudent',
    data() {
        return {
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

    methods: {
        savedata() {
            axios.post('https://reqres.in/api/users', this.model.data).then(res => {
                alert('Your detail submitted successfully.');
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
                return 'this field is required';
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