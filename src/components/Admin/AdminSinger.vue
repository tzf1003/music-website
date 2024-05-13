<template>
  <div class="singer-management">
    <el-input v-model="searchKey" placeholder="搜索歌手" @keyup.enter="fetchSingers" class="search-input" />
    <el-button @click="fetchSingers">搜索</el-button>
    <el-button @click="showAddSingerModal = true">添加歌手</el-button>

    <el-table :data="singers" show-overflow-tooltip>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="歌手名"></el-table-column>
      <el-table-column prop="imgUrl" label="图片URL"></el-table-column>
      <el-table-column prop="img1v1Url" label="等比图片"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button @click="openEditSingerModal(row)" type="primary">编辑</el-button>
          <el-button @click="deleteSinger(row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 添加歌手的模态框 -->
    <el-dialog v-model="showAddSingerModal" title="添加歌手">
      <el-form :model="addForm" label-width="120px">
        <el-form-item label="歌手名">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="addForm.description"></el-input>
        </el-form-item>
        <el-form-item label="1比1图片URL">
          <el-input v-model="addForm.imgUrl"></el-input>
        </el-form-item>
        <el-form-item label="图片URL">
          <el-input v-model="addForm.img1v1Url"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showAddSingerModal = false">取消</el-button>
          <el-button type="primary" @click="addSinger">确认</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 编辑歌手的模态框 -->
    <el-dialog v-model="showEditSingerModal" title="编辑歌手">
      <el-form :model="editForm" label-width="120px">
        <el-form-item label="歌手名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="editForm.description"></el-input>
        </el-form-item>
        <el-form-item label="1比1图片URL">
          <el-input v-model="editForm.imgUrl"></el-input>
        </el-form-item>
        <el-form-item label="图片URL">
          <el-input v-model="editForm.img1v1Url"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showEditSingerModal = false">取消</el-button>
          <el-button type="primary" @click="updateSinger">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService';
import { ElMessage, ElMessageBox } from 'element-plus'

const singers = ref([]);
const searchKey = ref('');
const total = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);

const showAddSingerModal = ref(false);
const addForm = ref({
  name: '',
  imgUrl: '',
  img1v1Url: '',
  description: ''
});

const showEditSingerModal = ref(false);
const editForm = ref({
  id: '',
  name: '',
  imgUrl: '',
  img1v1Url: '',
  description: ''
});
function fetchSingers() {
  const params = {
    search: searchKey.value,
    limit: pageSize.value,
    page: currentPage.value
  };
  apiService.fetchWithAuth("admin/singer/search?str="+params.search+"&page="+params.page+"&size="+params.limit, "GET", params).then(result => {
    singers.value = result.records
    total.value = result.total;
  });
}

function addSinger() {
  apiService.fetchJsonWithAuth("admin/singer/add", "POST", addForm.value).then(() => {
    fetchSingers();
    showAddSingerModal.value = false;
  });
}
function openEditSingerModal(row) {
  editForm.value = JSON.parse(JSON.stringify(row));
  showEditSingerModal.value = true;
  
}

function updateSinger() {
  apiService.fetchJsonWithAuth(`admin/singer/${editForm.value.id}`, "PUT", editForm.value).then(() => {
    fetchSingers();
    showEditSingerModal.value = false;
  });
}

function deleteSinger(id) {
  ElMessageBox.confirm(
    '您确定要删除这首歌吗?', 
    '警告', 
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    apiService.fetchWithAuth(`admin/singer/${id}`, "DELETE")
      .then(() => {
        fetchSingers(); // 刷新歌手列表
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
  fetchSingers();
}

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
  fetchSingers();
}
</script>


<style scoped>
.search-input {
  margin-bottom: 20px;
}
</style>
