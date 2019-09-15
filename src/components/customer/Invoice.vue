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
              <v-text-field label="อาการของคอมพิวเตอร์" v-model="invoice.symptom" :rules="[rules.require]"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ชนิดของคอมพิวเตอร์" v-model="invoice.type" :items="computerType" :rules="[rules.require]"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ยี่ห้อ" v-model="invoice.brand" :items="brand" :rules="[rules.require]"></v-select>
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
              <tool @addTool="setTool"></tool>
              <v-list v-if="invoice.tools.length > 0" class="mt-3" color="secondary">
                <v-list-item v-for="(tool, index) in items" :key="tool.id">
                  <v-list-item-title class="black--text">{{ index + 1 }}. {{ tool.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="Email" v-model="invoice.email" type="email"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="เบอร์โทรศัพท์" v-model="invoice.phone" :rules="[rules.number]"></v-text-field>
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
import InvoiceController from '../../services/InvoiceController'
import Tool from './parts/Tool'

export default {
  components: {
    Tool
  },
  data: () => ({
    date: null, // new Date().toDateString().substr(0, 10),
    menu: false,
    snackbar: false,
    warningText: '',
    items: [],
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
    tools: [],
    rules: {
      email: value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'รูปแบบ Email ไม่ถูกต้อง',
      number: value => /^\d+$/.test(value) || 'รูปแบบเบอร์โทรไม่ถูกต้อง',
      require: value => !!value || 'กรุณาป้อนข้อมูล'
    }
  }),
  created() {
    this.invoice.customer = Number(this.$route.params.user)
  },
  mounted() {
    InvoiceController.getBrand().then(response => {
      this.$log.debug("Data loaded: ", response.data)
      response.data.forEach(element => {
        this.brand.push({
          text: element.name,
          value: element.id
        })
      });
    })
    InvoiceController.getComputerType().then(response => {
      this.$log.debug("Data loaded: ", response.data)
      response.data.forEach(element => {
        this.computerType.push({
          text: element.type,
          value: element.id
        })
      })
    })
  },
  methods: {
    postInvoice: function () {
      this.$log.debug(this.invoice)
      InvoiceController.postInvoice(this.invoice).then(response => {
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
    },
    setTool: function (tool) {
      this.items = tool
      this.invoice.tools = []
      tool.forEach(snapshot => {
        this.invoice.tools.push(snapshot.id)
      })
      this.$log.debug(this.invoice.tools)
    }
  }
};
</script>

