
<template>
    <main>
        <div class="card mt-3">
            <div class="d-flex align-items-center cardhead">
                <div class="card header">
                    <h5 class="text-primary p-2">Student list</h5>
                </div>
                <div>
                    <RouterLink to="/addstudent" class="text-decoration-none"><button class="btn btn-success">Add
                            Student</button></RouterLink>
                </div>
            </div>
            <div class="card-body">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th class="p-2">ID</th>
                                <th class="p-2">NAME</th>
                                <th class="p-2">USER NAME</th>
                                <th class="p-2">EMAIL</th>
                                <th class="p-2">AVATAR</th>
                                <th class="p-2">EDIT</th>
                                <th class="p-2">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list, index) in studentslist" :key="index">
                                <td class="p-2">{{ list.id }}</td>
                                <td class="p-2">{{ list.first_name }}</td>
                                <td class="p-2">{{ list.last_name }}</td>
                                <td class="p-2">{{ list.email }}</td>
                                <td class="p-2"> <img :src="list.avatar" class="listimg"> </td>
                                <td class="p-2">
                                    <button type="button" class="btn btn-success">
                                        <RouterLink :to="{ path: '/students/' + list.id + '/edit' }"
                                            class="text-decoration-none text-light">Edit
                                        </RouterLink>
                                    </button>
                                </td>
                                <td class="p-2">
                                    <button type="button" class="btn btn-danger"
                                        @click="deletedata(list.id)">Delete</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
import axios from 'axios'

export default {

    name: 'studentlist',
    data() {
        return {
            studentslist: [],
        }
    },
    mounted() {
        return this.getstudents();
    },

    methods: {

        getstudents() {
            axios.get('https://reqres.in/api/users?page=1').then(res => {
                this.studentslist = res.data.data
                console.log(res.data)
            })
                .catch(error => {
                    this.error = error;
                })
        },

        deletedata(studentId) {
            axios.delete(`https://reqres.in/api/users/${studentId}`).then((res) => {
                console.log(res.data.data)
                this.getstudents
            })
        }
    }
}

</script>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cardhead {
    justify-content: space-between;
}

.listimg {
    width: 100px;
}

.bg {
    background-color: rgb(80, 87, 87);
}

th,
tr,
td {
    border: 1px solid;
}

th,
td {
    text-align: left;
    padding: 0.5rem;
}


.table-container {
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
}


@media (max-width: 480px) {

    /* th,
    td {
        display: block;
        width: 100%;
    } */
}
</style>