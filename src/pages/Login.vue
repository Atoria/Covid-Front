<template>
  <div class="container">

    <div class="login-container">

      <card class="card w-50" :title="$t('login')">
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

              <b-form-invalid-feedback v-for="err of errors.email" :key="err" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>

            </b-form-group>

            <b-form-group :label="$t('password')"
                          label-for="register-input-password">
              <b-form-input
                id="register-input-password"
                :placeholder="$t('password')"
                v-model.trim="$v.password.$model"
                type="password"
                :state="errors.password && errors.password.length=== 0"
              ></b-form-input>

              <b-form-invalid-feedback v-for="err of errors.password" :key="err" id="register-input-email">
                {{ err }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit"
                      class="float-right"
                      variant="primary"
                      @click.prevent="login()"
            >Submit
            </b-button>
          </b-form>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import {email, minLength, required, sameAs} from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      errors: {},
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },

  methods: {
    setErrorMessages() {
      this.errors = {
        email: [],
        password: [],
      };

      if (!this.$v.email.required) {
        this.errors.email.push(this.$t("errors.required.email"))
      }
      if (!this.$v.email.email) {
        this.errors.email.push(this.$t("errors.valid.email"))
      }
      if (!this.$v.password.required) {
        this.errors.password.push(this.$t("errors.required.password"))
      }
      if (!this.$v.password.minLength) {
        this.errors.password.push(this.$t("errors.minLength.password"))
      }
    },
    login() {
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

.login-container {
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
