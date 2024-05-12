<template>
    <div class="artist-management">
      <el-input v-model="searchKey" placeholder="搜索歌手" @keyup.enter="fetchArtists" class="search-input"/>
      <el-button @click="fetchArtists">搜索</el-button>
      <el-button @click="showAddArtistModal=true">添加歌手</el-button>
  
      <el-table :data="artists" style="width: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="歌手名"></el-table-column>
        <el-table-column prop="introduction" label="简介"></el-table-column>
        <el-table-column prop="img_url" label="图片URL">
          <template #default="{row}">
            <img :src="row.img_url" alt="图片" style="width: 50px; height: 50px;">
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{row}">
            <el-button @click="openEditArtistModal(row)">编辑</el-button>
            <el-button @click="deleteArtist(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
  
      <!-- 添加歌手的模态框 -->
      <el-dialog v-model="showAddArtistModal" title="添加歌手">
        <el-form ref="addForm" :model="addForm" label-width="120px">
          <el-form-item label="歌手名">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input v-model="addForm.introduction"></el-input>
          </el-form-item>
          <el-form-item label="图片URL">
            <el-input v-model="addForm.img_url"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="showAddArtistModal = false">取消</el-button>
          <el-button type="primary" @click="addArtist">确认</el-button>
        </template>
      </el-dialog>
  
      <!-- 编辑歌手的模态框 -->
      <el-dialog v-model="showEditArtistModal" title="编辑歌手">
        <el-form ref="editForm" :model="editForm" label-width="120px">
          <el-form-item label="歌手名">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input v-model="editForm.introduction"></el-input>
          </el-form-item>
          <el-form-item label="图片URL">
            <el-input v-model="editForm.img_url"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="showEditArtistModal = false">取消</el-button>
          <el-button type="primary" @click="updateArtist">确认</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import apiService from '@/tools/apiService';
  
  const artists = ref([]);
  const searchKey = ref('');
  const total = ref(0);
  const pageSize = ref(10);
  const currentPage = ref(1);
  
  const showAddArtistModal = ref(false);
  const addForm = ref({
    name: '',
    introduction: '',
    img_url: ''
  });
  
  const showEditArtistModal = ref(false);
  const editForm = ref({
    id: '',
    name: '',
    introduction: '',
    img_url: ''
  });
  
  function fetchArtists() {
    const params = {
      search: searchKey.value,
      limit: pageSize.value,
      page: currentPage.value
    };
    apiService.fetchWithAuth("artists/search", "GET", params).then(result => {
      artists.value = result.data;
      total.value = result.total;
    });
  }
  
  function addArtist() {
    apiService.fetchWithAuth("artists/add", "POST", addForm.value).then(() => {
      fetchArtists();
      showAddArtistModal.value = false;
    });
  }
  
  function openEditArtistModal(row) {
    editForm.value = { ...row };
    showEditArtistModal.value = true;
  }
  
  function updateArtist() {
    apiService.fetchWithAuth(`artists/update/${editForm.value.id}`, "PUT", editForm.value).then(() => {
      fetchArtists();
      showEditArtistModal.value = false;
    });
  }
  
  function deleteArtist(id) {
    apiService.fetchWithAuth(`artists/delete/${id}`, "DELETE").then(() => {
      fetchArtists();
    });
  }
  
  function handleSizeChange(newSize) {
    pageSize.value = newSize;
    fetchArtists();
  }
  
  function handleCurrentChange(newPage) {
    currentPage.value = newPage;
    fetchArtists();
  }
  </script>
  
  <style scoped>
  .search-input {
    margin-bottom: 20px;
  }
  </style>
  