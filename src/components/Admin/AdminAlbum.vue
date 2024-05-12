<template>
    <div>
      <el-input v-model="searchQuery" placeholder="搜索专辑" class="mb-2"/>
      <el-button @click="fetchAlbums">搜索</el-button>
      <el-button @click="showAddAlbumModal">添加专辑</el-button>
  
      <el-table :data="albums" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"/>
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="source" label="来源"/>
        <el-table-column prop="source_data" label="来源数据"/>
        <el-table-column prop="img_url" label="图片URL"/>
        <el-table-column label="操作">
          <template v-slot:default="{ row }">
            <el-button @click="showEditAlbumModal(row)">编辑</el-button>
            <el-button @click="deleteAlbum(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalAlbums">
      </el-pagination>
  
      <!-- 添加/编辑专辑的模态窗口 -->
      <el-dialog model:visible.sync="isModalVisible" title="编辑专辑">
        <el-form :model="currentAlbum">
          <el-form-item label="名称">
            <el-input v-model="currentAlbum.name"/>
          </el-form-item>
          <el-form-item label="来源">
            <el-input v-model="currentAlbum.source"/>
          </el-form-item>
          <el-form-item label="来源数据">
            <el-input v-model="currentAlbum.source_data"/>
          </el-form-item>
          <el-form-item label="图片URL">
            <el-input v-model="currentAlbum.img_url"/>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
          <el-button @click="isModalVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveAlbum">确 定</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import apiService from '@/tools/apiService';
  
  const albums = ref([]);
  const totalAlbums = ref(0);
  const currentPage = ref(1);
  const pageSize = ref(10);
  const searchQuery = ref('');
  const isModalVisible = ref(false);
  const currentAlbum = ref({ id: '', name: '', source: '', source_data: '', img_url: '' });
  
  const fetchAlbums = () => {
    const params = {
      page: currentPage.value,
      size: pageSize.value,
      query: searchQuery.value
    };
    apiService.fetchWithAuth('albums/search', 'GET', params).then((result) => {
      albums.value = result.albums;
      totalAlbums.value = result.total;
    });
  };
  
  const showAddAlbumModal = () => {
    currentAlbum.value = { name: '', source: '', source_data: '', img_url: '' };
    isModalVisible.value = true;
  };
  
  const showEditAlbumModal = (album) => {
    currentAlbum.value = { ...album };
    isModalVisible.value = true;
  };
  
  const saveAlbum = () => {
    const method = currentAlbum.value.id ? 'PUT' : 'POST';
    apiService.fetchWithAuth(`albums/${method === 'PUT' ? 'update/' + currentAlbum.value.id : 'create'}`, method, currentAlbum.value).then(() => {
      fetchAlbums();
      isModalVisible.value = false;
    });
  };
  
  const deleteAlbum = (id) => {
    apiService.fetchWithAuth(`albums/delete/${id}`, 'DELETE').then(() => {
      fetchAlbums();
    });
  };
  
  const handleSizeChange = (newSize) => {
    pageSize.value = newSize;
    fetchAlbums();
  };
  
  const handleCurrentChange = (newPage) => {
    currentPage.value = newPage;
    fetchAlbums();
  };
  
  fetchAlbums();
  </script>
  
  <style scoped>
  .mb-2 {
    margin-bottom: 20px;
  }
  </style>
  