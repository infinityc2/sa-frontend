<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-3" tile>
              <v-flex shrink class="mx-auto">
                <v-img
                  height="275"
                  src="https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80"
                />
              </v-flex>
              <v-flex>
                <v-card-title>เข้าสู่ระบบ</v-card-title>
                <v-card-text>
                  <v-form @keyup.enter="login">
                    <v-text-field
                      label="ชื่อผู้ใช้งาน"
                      name="login"
                      prepend-icon="person"
                      type="text"
                      v-model="user.username"
                    ></v-text-field>

                    <v-text-field
                      label="รหัสผ่าน"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      v-model="user.password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click.prevent="login" tile type="submit">Login</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      this.$log.debug("Welcome " + this.user.username);
    }
  }
};
</script>


