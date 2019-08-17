<template>
  <v-card class="mx-auto" elevation="24" tile max-width="600" color="secondary">
    <v-container>
      <v-card-title class="display-1">ชำระเงิน</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-text-field label="ID ลูกค้า"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="รายชื่อพนักงาน"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="รายการแจ้งซ่อม"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ประเภทการชำระเงิน"></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn color="primary" tile>ชำระเงิน</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({})
};
</script>

