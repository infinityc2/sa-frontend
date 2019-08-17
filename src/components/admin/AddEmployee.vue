<template>
  <v-card class="mx-auto" elevation="24" tile max-width="600" color="secondary">
    <v-container>
      <v-card-title class="display-1">เพิ่มพนักงาน</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-text-field label="ชื่อ"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="นามสกุล"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field label="หมายเลขโทรศัพท์"></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ตำแหน่งงาน"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="เงินเดือน"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ประเภทการทำงาน"></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn color="primary" tile>ยืนยัน</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({})
};
</script>

