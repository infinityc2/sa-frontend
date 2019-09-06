<template>
  <v-card class="mx-auto" elevation="24" tile max-width="600" color="secondary">
    <v-container>
      <v-card-title class="display-1">ยกเลิกแจ้งซ่อม</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-select label="ID แจ้งซ่อม" v-model="cancel.invoice"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="สาเหตุ" v-model="cancel.cause"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="วิธีส่งคืนสินค้า" v-model="cancel.receiveMethod"></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn color="primary" tile>ยกเลิกแจ้งซ่อม</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cancel: {
      invoice: null,
      receiveMethod: null,
      cause: null
    }
  })
};
</script>