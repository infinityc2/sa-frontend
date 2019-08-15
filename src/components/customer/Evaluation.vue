<template>
  <v-card class="mx-auto" elevation="24" tile color="secondary" max-width="600">
    <v-container>
      <v-card-title class="display-1">ประเมินการแจ้งซ่อม</v-card-title>
    </v-container>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout wrap column>
            <v-flex xs12 md4>
              <v-select label="ความสะดวกในการใช้บริการ"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ซ่อมครบถ้วนตามที่แจ้ง"></v-select>
            </v-flex>
            <v-flex xs12 md4>
              <v-select label="ความรวดเร็วในการซ่อม"></v-select>
            </v-flex>
            <v-textarea label="ข้อเสนอแนะ"></v-textarea>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-btn tile color="primary">บันทึก</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>