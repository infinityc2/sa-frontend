<template>
  <v-card class="mx-auto" elevation="24" tile color="secondary" max-width="600">
    <v-container>
      <v-card-title class="display-1">ประเมินการแจ้งซ่อมคอมพิวเตอร์</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-select label="ID การแจ้งซ่อม" :items="requests" v-model="evaluation.request"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ช่างซ่อมคอมพิวเตอร์" v-model="evaluation.repairman"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select
                label="ความพึงพอใจ"
                :items="satisfactions"
                v-model="evaluation.satisfaction"
              ></v-select>
            </v-flex>
            <v-flex>
              <v-textarea label="ข้อเสนอแนะ" v-model="evaluation.suggestion"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn tile color="primary" @click="addEvaluation">บันทึก</v-btn>
      </v-container>
    </v-card-actions>

    <v-snackbar v-model="snackbar">
      {{ message }}
      <v-btn text color="primary" @click="snackbar = !snackbar">ปิด</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    evaluation: {
      request: null,
      repairman: null,
      satisfaction: null,
      suggestion: null
    },
    customer: null,
    message: "",
    snackbar: false,
    requests: [],
    repairmans: [],
    satisfactions: []
  }),
  created() {
    this.customer = Number(this.$route.params.user);
  },
  mounted() {
    this.$http.findRequestByCustomer(this.customer).then(response => {
      this.$log.debug("Data loaded:", response.data);
      response.data.reverse().forEach(element => {
        this.requests.push({
          text: element.requestCode,
          value: element.id
        });
      });
    });
    this.$http.getSatisfaction().then(response => {
      this.$log.debug("Data loaded:", response.data);
      response.data.forEach(element => {
        this.satisfactions.push({
          text: element.satisfactionLevel,
          value: element.id
        });
      });
    });
  },
  methods: {
    addEvaluation: function() {
      this.$http
        .newEvaluation(this.evaluation)
        .then(response => {
          this.message = "ประเมินสำเร็จ";
          this.$log.debug("Add Evaluation Complete", response.data);
        })
        .catch(error => {
          this.message = "ไม่สามารถทำการประเมินได้";
          this.$log.debug(error.response.data.message);
        })
        .finally(() => {
          this.snackbar = !this.snackbar
        });
    }
  }
};
</script>