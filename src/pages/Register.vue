<template>
  <div class="container">

    <div class="register-container">

      <card class="card w-50" title="Register">
        <div>
          <b-form>
            <b-form-group
              label="Email address:"
              label-for="register-input-email"
            >
              <b-form-input
                id="register-input-email"
                placeholder="Enter email"
                v-model.trim="$v.email.$model"
                :state="errors.email && errors.email.length === 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.email" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group label="Your Name:" label-for="register-input-name">
              <b-form-input
                id="register-input-name"
                placeholder="Name"
                v-model.trim="$v.name.$model"
                :state="errors.name && errors.name.length=== 0"
              ></b-form-input>
              <b-form-invalid-feedback v-for="err of errors.name" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group label="Your Surname:" label-for="register-input-surname">
              <b-form-input
                id="register-input-surname"
                placeholder="Surname"
                v-model.trim="$v.surname.$model"
                :state="errors.surname && errors.surname.length=== 0"
              ></b-form-input>
              <b-form-invalid-feedback v-for="err of errors.name" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group label="Password:" label-for="register-input-password">
              <b-form-input
                id="register-input-password"
                placeholder="Password"
                v-model.trim="$v.password.$model"
                :state="errors.password && errors.password.length=== 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.password" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>


            </b-form-group>
            <b-form-group label="Repeat password" label-for="register-input-repeat-password">
              <b-form-input
                id="register-input-repeat-password"
                placeholder="Repeat password"
                v-model.trim="$v.repeatPassword.$model"
                :state="errors.repeatPassword && errors.repeatPassword.length=== 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.repeatPassword" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-button type="submit"
                      class="float-right"
                      variant="primary"
                      @click.prevent="register()"
            >Submit
            </b-button>
          </b-form>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import {required, sameAs, minLength, email} from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data() {
    return {
      errors: {},
      email: "",
      name: "",
      surname: "",
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
    },
    surname: {
      required,
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    setErrorMessages() {
      this.errors = {
        email: [],
        name: [],
        surname: [],
        password: [],
        repeatPassword: []
      };

      if (!this.$v.email.required) {
        this.errors.email.push("Email is required")
      }
      if (!this.$v.email.email) {
        this.errors.email.push("Email should be valid")
      }
      if (!this.$v.name.required) {
        this.errors.name.push("Name is required")
      }
      if (!this.$v.surname.required) {
        this.errors.surname.push("Surname is required")
      }
      if (!this.$v.password.required) {
        this.errors.password.push("Password is required")
      }
      if (!this.$v.password.minLength) {
        this.errors.password.push("Password min length is 6")
      }
      if (!this.$v.repeatPassword.sameAs) {
        this.errors.repeatPassword.push("Password does not match")
      }

    },
    register() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.setErrorMessages();
      } else {
        //TODO SUBMIT REQUEST
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #ccc9c7;
  z-index: 10;
}


</style>
