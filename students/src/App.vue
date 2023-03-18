<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand text-primary" href="#">ANNA University</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item mx-5">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item mx-5">
              <RouterLink class="nav-link" to="/About">About</RouterLink>
            </li>
            <li class="nav-item mx-5">
              <RouterLink class="nav-link" to="/Courses">Courses</RouterLink>
            </li>
            <li class="nav-item mx-5">
              <RouterLink class="nav-link" to="/StudentsList">Student List</RouterLink>
            </li>
            <RouterLink class="nav-link" to="/AddStudent"><button class="btn btn-success mx-5" type="button">Add Student
              </button></RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped></style>
