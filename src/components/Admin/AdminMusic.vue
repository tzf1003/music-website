<template>
  <div class="song-management">
    <el-input v-model="searchKey" placeholder="搜索歌曲" @keyup.enter="fetchSongs" class="search-input" />
    <el-button @click="fetchSongs">搜索</el-button>
    <el-button @click="showAddSongModal = true">添加歌曲</el-button>

    <el-table :data="songs" show-overflow-tooltip >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="歌曲名"></el-table-column>
      <el-table-column prop="source" label="来源"></el-table-column>
      <el-table-column prop="sourceData" label="来源数据"></el-table-column>
      <el-table-column prop="duration" label="时长"></el-table-column>
      <!-- <el-table-column prop="imgUrl" label="图片链接"></el-table-column> -->
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="180" >
        <template #default="{ row }">
          <el-button @click="openEditSongModal(row)" type="primary">编辑</el-button>
          <el-button @click="deleteSong(row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 添加歌曲的模态框 -->
    <el-dialog v-model="showAddSongModal" title="添加歌曲">
      <el-form :model="addForm" label-width="120px">
        <el-form-item label="歌曲名">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="addForm.source"></el-input>
        </el-form-item>
        <el-form-item label="来源数据">
          <el-input v-model="addForm.sourceData"></el-input>
        </el-form-item>
        <el-form-item label="图片Url">
          <el-input v-model="addForm.imgUrl"></el-input>
        </el-form-item>
        <el-form-item label="时长">
          <el-input v-model="addForm.duration"></el-input>
        </el-form-item>
        <el-form-item label="歌词">
          <el-input type="textarea" v-model="addForm.lyric"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showAddSongModal = false">取消</el-button>
          <el-button type="primary" @click="addSong">确认</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 编辑歌曲的模态框 -->
    <el-dialog v-model="showEditSongModal" title="编辑歌曲">
      <el-form :model="editForm" label-width="120px">
        <el-form-item label="歌曲名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="editForm.source"></el-input>
        </el-form-item>
        <el-form-item label="来源数据">
          <el-input v-model="editForm.sourceData"></el-input>
        </el-form-item>
        <el-form-item label="图片Url">
          <el-input v-model="editForm.imgUrl"></el-input>
        </el-form-item>
        <el-form-item label="时长(毫秒)">
          <el-input v-model="editForm.duration"></el-input>
        </el-form-item>
        <el-form-item label="歌词">
          <el-input type="textarea" v-model="editForm.lyric"></el-input>
        </el-form-item>

      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showEditSongModal = false">取消</el-button>
          <el-button type="primary" @click="updateSong">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService';
import { ElMessage, ElMessageBox } from 'element-plus'

const songs = ref([]);
const searchKey = ref('');
const total = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);

const showAddSongModal = ref(false);
const addForm = ref({
  name: '',
  source: '',
  sourceData: '',
  imgUrl:'',
  duration: '',
  lyric: ''
});

const showEditSongModal = ref(false);
const editForm = ref({
  id: '',
  name: '',
  source: '',
  sourceData: '',
  imgUrl:'',
  duration: '',
  lyric: ''
});

function fetchSongs() {
  const params = {
    search: searchKey.value,
    limit: pageSize.value,
    page: currentPage.value
  };
  apiService.fetchWithAuth("admin/music/search?str="+params.search+"&page="+params.page+"&size="+params.limit, "GET", params).then(result => {
    songs.value = result.records
    total.value = result.total;
  });
}

function addSong() {
  apiService.fetchJsonWithAuth("admin/music/add", "POST", addForm.value).then(() => {
    fetchSongs();
    showAddSongModal.value = false;
  });
}
function openEditSongModal(row) {
  editForm.value = JSON.parse(JSON.stringify(row));
  showEditSongModal.value = true;
  
}

function updateSong() {
  apiService.fetchJsonWithAuth(`admin/music/${editForm.value.id}`, "PUT", editForm.value).then(() => {
    fetchSongs();
    showEditSongModal.value = false;
  });
}

function deleteSong(id) {
  ElMessageBox.confirm(
    '您确定要删除这首歌吗?', 
    '警告', 
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    apiService.fetchWithAuth(`admin/music/${id}`, "DELETE")
      .then(() => {
        fetchSongs(); // 刷新歌曲列表
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
  fetchSongs();
}

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
  fetchSongs();
}
</script>


<style scoped>
.search-input {
  margin-bottom: 20px;
}
</style>
