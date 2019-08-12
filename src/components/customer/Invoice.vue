<template>
  <v-card class="mx-auto" elevation="24" tile max-width="600" color="secondary">
    <v-container>
        <v-card-title class="display-1">แจ้งซ่อม</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-text-field label="อาการของคอมพิวเตอร์" v-model="invoice.dianose"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ชนิดของคอมพิวเตอร์" v-model="invoice.type"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ยี่ห้อ" v-model="invoice.brand"></v-select>
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
                <v-date-picker v-model="invoice.sent" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(invoice.sent)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="อุปกรณ์หรือ software ที่จะติดตั้ง" v-model="invoice.tool"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="Email" v-model="invoice.email"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="เบอร์โทรศัพท์" v-model="invoice.phone"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn color="primary" tile>แจ้งซ่อม</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toDateString().substr(0, 10),
      menu: false,
      invoice: {
        dianose: null,
        type: null,
        brand: null,
        sent: null,
        tools: [],
        email: null,
        phone: null,
        customer: ""
      }
    };
  }
};
</script>

