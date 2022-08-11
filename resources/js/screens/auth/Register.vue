<template>
 <div class="pa-0" style="max-height:100vh;overflow:hidden;background-color:white;height:100vh">
    <v-img src="/assets/MX-Performance-Hero-Desktop.jpg" height="350px" width="100vw"></v-img>

    <!-- <div class="card">
        <h3 class="card-header text-center">Register Area</h3>
        <div class="card-body">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control"
                        v-model.trim="form.firstname" :class="{
                        'is-invalid':form.firstname.$error, 'is-valid':!form.firstname.$invalid }">
                        <div class="valid-feedback">Your first name is valid!</div>
                        <div class="invalid-feedback">
                            <span v-if="!form.firstname.required"> First name is required.</span>
                            <span v-if="!form.lastname.minLength">First name must have at least {{
                            form.firstname.$params.minLength.min}} letters.</span>
                            <span v-if="!form.firstname.maxLength">First name must have at most {{
                            form.firstname.$params.maxLength.max}} letters.</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div> -->

    <v-card
        class="mx-auto elevation-5 text-center pa-5"
        max-width="350"
        style="border-radius:20px;position:relative;top:-100px"
    >
        <v-card-subtitle class="title blac--text pa-1">
            Register
        </v-card-subtitle>
        <v-card-subtitle class="pa-1"></v-card-subtitle>
        <v-text-field hide-details color="black" label="Name" v-model="form.name"></v-text-field>
        <span class="w-full text-red-500" v-if="errors.name">{{ errors.name[0] }}</span>
        <v-text-field hide-details color="black" label="Email" v-model="form.email"></v-text-field>
        <span class="w-full text-red-500" v-if="errors.email">{{ errors.email[0] }}</span>
        <v-text-field
         hide-details color="black"
         label="Password"
         type="password"
         v-model="form.password"
         required
         :rules="[v => !!v || 'field is required']"
        ></v-text-field>
        <v-text-field
         hide-details
         color="black"
         label="Confirm Password"
         type="password"
         v-model="form.password_confirmation"
         :rules="[(form.password === form.password_confirmation) || 'Password must match']"
         ></v-text-field>
        <v-card-actions>
        <v-btn color="black" dark block rounded v-on:click="handleRegister()">
            Register
        </v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
    import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

    export default {
        name: 'Register',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                },
                errors: []
            }
        },
        methods: {
            handleRegister() {
                // axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/admin/register', this.form).then(response => {
                        // axios.get('api/user').then(response => {
                            if(response.status >= 200 && response.status < 300){
                                // console.log(response.data);
                                // if(this.form.email === response.data.email){
                                    // EventBus.$emit('authCheck')
                                    this.$router.push('/login')
                                // }
                            }
                        // })
                    })
                    .catch((error) => {
                        // console.log(err + ' - ' + JSON.stringify(this.form));
                        this.errors = error.response.data.errors
                    })
                // });
            }
        },
        // computed: {
        //     passwordConfirmationRule() {
        //         return () => (this.password === this.confirm_password) || 'Password must match'
        //     }
        // }
    }
</script>

<style>

</style>