<template>
  <div class="album-management">
    <el-input v-model="searchKey" placeholder="搜索专辑" @keyup.enter="fetchAlbums" class="search-input" />
    <el-button @click="fetchAlbums">搜索</el-button>
    <el-button @click="showAddAlbumModal = true">添加专辑</el-button>

    <el-table :data="albums" show-overflow-tooltip>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="专辑名"></el-table-column>
      <el-table-column prop="source" label="来源"></el-table-column>
      <el-table-column prop="sourceId" label="来源数据"></el-table-column>
      <el-table-column prop="imgUrl" label="图片URL"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button @click="openEditAlbumModal(row)" type="primary">编辑</el-button>
          <el-button @click="deleteAlbum(row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 添加专辑的模态框 -->
    <el-dialog v-model="showAddAlbumModal" title="添加专辑">
      <el-form :model="addForm" label-width="120px">
        <el-form-item label="专辑名">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="addForm.source"></el-input>
        </el-form-item>
        <el-form-item label="来源数据">
          <el-input v-model="addForm.sourceId"></el-input>
        </el-form-item>
        <el-form-item label="图片URL">
          <el-input type="textarea" v-model="addForm.imgUrl"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showAddAlbumModal = false">取消</el-button>
          <el-button type="primary" @click="addAlbum">确认</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 编辑专辑的模态框 -->
    <el-dialog v-model="showEditAlbumModal" title="编辑专辑">
      <el-form :model="editForm" label-width="120px">
        <el-form-item label="专辑名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="editForm.source"></el-input>
        </el-form-item>
        <el-form-item label="来源数据">
          <el-input v-model="editForm.sourceId"></el-input>
        </el-form-item>
        <el-form-item label="图片URL">
          <el-input type="textarea" v-model="editForm.imgUrl"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showEditAlbumModal = false">取消</el-button>
          <el-button type="primary" @click="updateAlbum">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService';
import { ElMessage, ElMessageBox } from 'element-plus'

const albums = ref([]);
const searchKey = ref('');
const total = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);

const showAddAlbumModal = ref(false);
const addForm = ref({
  name: '',
  source: '',
  sourceId: '',
  imgUrl: ''
});

const showEditAlbumModal = ref(false);
const editForm = ref({
  id: '',
  name: '',
  source: '',
  sourceId: '',
  imgUrl: ''
});
function fetchAlbums() {
  const params = {
    search: searchKey.value,
    limit: pageSize.value,
    page: currentPage.value
  };
  apiService.fetchWithAuth("admin/album/search?str="+params.search+"&page="+params.page+"&size="+params.limit, "GET", params).then(result => {
    albums.value = result.records
    total.value = result.total;
  });
}

function addAlbum() {
  apiService.fetchJsonWithAuth("admin/album/add", "POST", addForm.value).then(() => {
    fetchAlbums();
    showAddAlbumModal.value = false;
  });
}
function openEditAlbumModal(row) {
  editForm.value = JSON.parse(JSON.stringify(row));
  showEditAlbumModal.value = true;
  
}

function updateAlbum() {
  apiService.fetchJsonWithAuth(`admin/album/${editForm.value.id}`, "PUT", editForm.value).then(() => {
    fetchAlbums();
    showEditAlbumModal.value = false;
  });
}

function deleteAlbum(id) {
  ElMessageBox.confirm(
    '您确定要删除这首歌吗?', 
    '警告', 
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    apiService.fetchWithAuth(`admin/album/${id}`, "DELETE")
      .then(() => {
        fetchAlbums(); // 刷新专辑列表
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
  fetchAlbums();
}

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
  fetchAlbums();
}
</script>


<style scoped>
.search-input {
  margin-bottom: 20px;
}
</style>
