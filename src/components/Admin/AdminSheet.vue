<template>
    <div class="sheet-management">
      <el-input v-model="searchKey" placeholder="搜索歌单" @keyup.enter="fetchSheets" class="search-input" />
      <el-button @click="fetchSheets">搜索</el-button>
      <el-button @click="showAddSheetModal = true">添加歌单</el-button>
  
      <el-table :data="sheets" show-overflow-tooltip>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="歌单名"></el-table-column>
        <el-table-column prop="source" label="来源"></el-table-column>
        <el-table-column prop="sourceId" label="来源数据"></el-table-column>
        <el-table-column prop="isPublic" label="是否公开"></el-table-column>
        <el-table-column prop="user" label="创建者ID"></el-table-column>
        <!-- <el-table-column prop="description" label="简介"></el-table-column> -->
        <el-table-column label="操作"  width="180">
          <template #default="{ row }">
            <el-button @click="openEditSheetModal(row)" type="primary">编辑</el-button>
            <el-button @click="deleteSheet(row.id)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
  
      <!-- 添加歌单的模态框 -->
      <el-dialog v-model="showAddSheetModal" title="添加歌单">
        <el-form :model="addForm" label-width="120px">
          <el-form-item label="歌单名">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="来源">
            <el-input v-model="addForm.source"></el-input>
          </el-form-item>
          <el-form-item label="来源数据">
            <el-input v-model="addForm.sourceId"></el-input>
          </el-form-item>
          <el-form-item label="图片url">
            <el-input v-model="addForm.imgUrl"></el-input>
          </el-form-item>
          <el-form-item label="是否公开(1 or 0)">
            <el-input v-model="addForm.isPublic"></el-input>
          </el-form-item>
          <el-form-item label="创建者id">
            <el-input v-model="addForm.user"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" v-model="addForm.description"></el-input>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
          <div class="dialog-footer">
            <el-button @click="showAddSheetModal = false">取消</el-button>
            <el-button type="primary" @click="addSheet">确认</el-button>
          </div>
        </template>
      </el-dialog>
  
      <!-- 编辑歌单的模态框 -->
      <el-dialog v-model="showEditSheetModal" title="编辑歌单">
        <el-form :model="editForm" label-width="120px">
          <el-form-item label="歌单名">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="来源">
            <el-input v-model="editForm.source"></el-input>
          </el-form-item>
          <el-form-item label="来源数据">
            <el-input v-model="editForm.sourceId"></el-input>
          </el-form-item>
          <el-form-item label="图片url">
            <el-input v-model="editForm.imgUrl"></el-input>
          </el-form-item>
          <el-form-item label="是否公开(1 or 0)">
            <el-input v-model="editForm.isPublic"></el-input>
          </el-form-item>
          <el-form-item label="创建者id">
            <el-input v-model="editForm.user"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" v-model="editForm.description"></el-input>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
          <div class="dialog-footer">
            <el-button @click="showEditSheetModal = false">取消</el-button>
            <el-button type="primary" @click="updateSheet">确认</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import apiService from '@/tools/apiService';
  import { ElMessage, ElMessageBox } from 'element-plus'
  
  const sheets = ref([]);
  const searchKey = ref('');
  const total = ref(0);
  const pageSize = ref(10);
  const currentPage = ref(1);
  
  const showAddSheetModal = ref(false);
  const addForm = ref({
    name: '',
    source: '',
    sourceId: '',
    isPublic:'',
    user: '',
    imgUrl: '',
    description: ''
  });
  
  const showEditSheetModal = ref(false);
  const editForm = ref({
    id: '',
    name: '',
    source: '',
    sourceId: '',
    isPublic:'',
    imgUrl: '',
    user: '',
    description: ''
  });
  function fetchSheets() {
    const params = {
      search: searchKey.value,
      limit: pageSize.value,
      page: currentPage.value
    };
    apiService.fetchWithAuth("admin/sheet/search?str="+params.search+"&page="+params.page+"&size="+params.limit, "GET", params).then(result => {
      sheets.value = result.records
      total.value = result.total;
    });
  }
  
  function addSheet() {
    apiService.fetchJsonWithAuth("admin/sheet/add", "POST", addForm.value).then(() => {
      fetchSheets();
      showAddSheetModal.value = false;
    });
  }
  function openEditSheetModal(row) {
    editForm.value = JSON.parse(JSON.stringify(row));
    showEditSheetModal.value = true;
    
  }
  
  function updateSheet() {
    apiService.fetchJsonWithAuth(`admin/sheet/${editForm.value.id}`, "PUT", editForm.value).then(() => {
      fetchSheets();
      showEditSheetModal.value = false;
    });
  }
  
  function deleteSheet(id) {
    ElMessageBox.confirm(
      '您确定要删除这首歌吗?', 
      '警告', 
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      apiService.fetchWithAuth(`admin/sheet/${id}`, "DELETE")
        .then(() => {
          fetchSheets(); // 刷新歌单列表
        })
        .catch(err => {
          console.error("删除失败:", err); // 处理错误
        });
    }).catch(() => {
      console.log('删除操作已取消');
    });
  }
  
  function handleSizeChange(newSize) {
    pageSize.value = newSize;
    fetchSheets();
  }
  
  function handleCurrentChange(newPage) {
    currentPage.value = newPage;
    fetchSheets();
  }
  </script>
  
  
  <style scoped>
  .search-input {
    margin-bottom: 20px;
  }
  </style>
  