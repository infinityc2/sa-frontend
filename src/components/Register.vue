<template>
  <v-container>
    <v-card class="mx-auto" elevation="24" tile max-width="600" color="secondary">
      <v-container>
        <v-card-title class="display-1">สมัครสมาชิก</v-card-title>
      </v-container>
      <v-card-text>
        <v-form>
          <v-container>
            <v-layout wrap column>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="ชื่อ"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="สกุล"></v-text-field>
                </v-col>
              </v-row>
              <v-flex xs12 md4>
                <v-text-field label="อีเมล์"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="รหัสผ่าน"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-radio-group label="เพศ" row color="primary">
                  <v-radio label="ชาย" color="primary"></v-radio>
                  <v-radio label="หญิง" color="primary"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 md4>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="วันที่ส่งซ่อม"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="register.birth" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(register.birth)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="เบอร์โทรศัพท์"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-textarea label="ที่อยู่"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text tile class="ml-5" to="/login">กลับ</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" tile class="mr-5">สมัครสมาชิก</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toDateString().substr(0, 10),
    menu: false,
    register: {
      birth: null
    }
  })
};
</script>