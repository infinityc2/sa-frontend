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
              <v-text-field label="อาการของคอมพิวเตอร์" v-model="invoice.symptom"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ชนิดของคอมพิวเตอร์" v-model="invoice.type" :items="computerType"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ยี่ห้อ" v-model="invoice.brand" :items="brand"></v-select>
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
                <v-date-picker v-model="invoice.sentDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(invoice.sentDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="อุปกรณ์หรือ software ที่จะติดตั้ง" v-model="invoice.tools" :items="tools" multiple chips></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="Email" v-model="invoice.email" type="email"></v-text-field>
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
        <v-btn color="primary" tile @click="postInvoice">แจ้งซ่อม</v-btn>
      </v-container>
    </v-card-actions>

    <v-snackbar v-model="snackbar">
      {{ warningText }}
      <v-btn text color="primary" @click="snackbar = !snackbar">ปิด</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import Provider from '../../services/provider'

export default {
  data: () => ({
    date: null, // new Date().toDateString().substr(0, 10),
    menu: false,
    snackbar: false,
    warningText: '',
    invoice: {
      symptom: null,
      type: null,
      brand: null,
      sentDate: null,
      tools: [],
      email: null,
      phone: null,
      customer: null
    },
    brand: [],
    computerType: [],
    tools: []
  }),
  mounted() {
    Provider.getBrand().then(response => {
      this.$log.debug("Data loaded: ", response.data)
      response.data.forEach(element => {
        this.brand.push({
          text: element.name,
          value: element.id
        })
      });
    })
    Provider.getComputerType().then(response => {
      this.$log.debug("Data loaded: ", response.data)
      response.data.forEach(element => {
        this.computerType.push({
          text: element.type,
          value: element.id
        })
      })
    })
    Provider.getTool().then(response => {
      this.$log.debug("Data loaded: ", response.data)
      response.data.forEach(element => {
        this.tools.push({
          text: element.name + ': ' + element.price + ' บาท',
          value: element.id
        })
      })
    })
  },
  methods: {
    postInvoice: async function () {
      await Provider.postInvoice(this.invoice).then(response => {
        this.warningText = 'การแจ้งซ่อมสำเร็จ'
        this.$log.debug("Add Invoice Complete", response.data)
      })
      .catch(error => {
        this.warningText = 'ไม่สามารถทำการแจ้งซ่อมได้'
        this.$log.debug(error.response.data.message)
      })
      .finally(() => {
        this.snackbar = !this.snackbar
      })
    }
  }
};
</script>

