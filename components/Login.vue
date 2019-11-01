<template>
  <div class="login-form">
    <div class="container">
      <form @submit.prevent="login">
        <p v-if="error" class="error-notice">{{ error }}</p>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            username
          </label>
          <input class="input" v-model="formUsername" type="text" placeholder="username" name="username"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            password
          </label>
          <input class="input" v-model="formPassword" type="password" placeholder="password" name="password"/>
        </div>
        
        <div class="login-button">
          <button class="button" type="submit">ログイン</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        })
        this.$router.push("/")
      } catch(e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style lang="scss">
  .login-form {
    min-height: 100vh;
    @apply bg-gray-100 py-20;
    .container {
      text-align: left;
      display: block;
      min-height: auto;
      @apply bg-white p-4 mx-auto max-w-md shadow-md rounded;
      .error-notice {
        @apply text-red-500 bg-red-100 p-2 rounded border border-red-400 text-sm font-bold mb-4
      }
      .input {
        @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
        &:focus {
          @apply outline-none shadow-outline
        }
      }
      .button {
        @apply bg-blue-500 text-white font-bold py-2 px-4 text-center rounded;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          @apply bg-blue-600
        }
        &:focus {
          @apply outline-none shadow-outline;
        }
      }
    }
  }
</style>
