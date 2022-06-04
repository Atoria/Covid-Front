<template>
  <div class="container">

    <div class="register-container">

      <card class="card w-50" :title="$t('register')">
        <div>
          <b-form>
            <b-form-group
              :label="$t('emailAddress')"
              label-for="register-input-email"
            >
              <b-form-input
                id="register-input-email"
                :placeholder="$t('emailAddress')"
                v-model.trim="$v.email.$model"
                :state="errors.email && errors.email.length === 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.email" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group :label="$t('name')" label-for="register-input-name">
              <b-form-input
                id="register-input-name"
                :placeholder="$t('name')"
                v-model.trim="$v.name.$model"
                :state="errors.name && errors.name.length=== 0"
              ></b-form-input>
              <b-form-invalid-feedback v-for="err of errors.name" :key="err" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group :label="$t('surname')" label-for="register-input-surname">
              <b-form-input
                id="register-input-surname"
                :placeholder="$t('surname')"
                v-model.trim="$v.surname.$model"
                :state="errors.surname && errors.surname.length=== 0"
              ></b-form-input>
              <b-form-invalid-feedback v-for="err of errors.name" :key="err" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group :label="$t('password')" label-for="register-input-password">
              <b-form-input
                id="register-input-password"
                :placeholder="$t('password')"
                type="password"
                v-model.trim="$v.password.$model"
                :state="errors.password && errors.password.length=== 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.password"  :key="err" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>


            </b-form-group>
            <b-form-group :label="$t('repeatPassword')" label-for="register-input-repeat-password">
              <b-form-input
                id="register-input-repeat-password"
                :placeholder="$t('repeatPassword')"
                type="password"
                v-model.trim="$v.repeatPassword.$model"
                :state="errors.repeatPassword && errors.repeatPassword.length=== 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.repeatPassword" :key="err" id="register-input-email">
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
        this.errors.email.push(this.$t("errors.required.email"))
      }
      if (!this.$v.email.email) {
        this.errors.email.push(this.$t("errors.valid.email"))
      }
      if (!this.$v.name.required) {
        this.errors.name.push(this.$t("errors.required.name"))
      }
      if (!this.$v.surname.required) {
        this.errors.surname.push(this.$t("errors.required.surname"))
      }
      if (!this.$v.password.required) {
        this.errors.password.push(this.$t("errors.required.password"))
      }
      if (!this.$v.password.minLength) {
        this.errors.password.push(this.$t("errors.minLength.password"))
      }
      if (!this.$v.repeatPassword.sameAs) {
        this.errors.repeatPassword.push(this.$t("errors.sameAs.repeatPassword"))
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
