<template>
  <div class="row">
      <div class="col-md-12">
          <table class="table table-striped">
              <thead class="thead-dark">
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="student in Students" :key="student.id">
                      <td>{{student.name}}</td>
                      <td>{{student.email}}</td>
                      <td>{{student.phone}}</td>
                      <td>
                        <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success">Edit
                        </router-link>
                        <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data () {
        return{ Students : []}
    },
    created(){
        let apiURL = 'http://localhost:4000/api'

        axios.get(apiURL).then(res=>{
            this.Students = res.data;
            console.log(this.Students)
        }).catch(error =>{
            console.log(error)
        })
    },
    methods : {
        deleteStudent(id){
            console.log('id', id)
            let apiURL = `http://localhost:4000/api/delete-student/${id}`
            let indexofArrayItem = this.Students.findIndex(i => i._id === id)
            console.log(indexofArrayItem)

            axios.delete(apiURL).then(()=>{
                console.log('ok')
                this.Students.splice(indexofArrayItem,1)
            }).catch(error => {
                console.log(error)
            })
            
        }
    }

}
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }

</style>