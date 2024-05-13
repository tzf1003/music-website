<template>
  <div class="user-management">
    <el-input v-model="searchKey" placeholder="搜索用户" @keyup.enter="fetchUsers" class="search-input" />
    <el-button @click="fetchUsers">搜索</el-button>

    <el-table :data="users" show-overflow-tooltip>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="email" label="电子邮件"></el-table-column>
      <el-table-column prop="role" label="权限信息"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button @click="openEditUserModal(row)" type="primary">编辑</el-button>
          <el-button @click="deleteUser(row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 编辑用户的模态框 -->
    <el-dialog v-model="showEditUserModal" title="编辑用户">
      <el-form :model="editForm" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="权限信息">
          <el-select v-model="editForm.role" placeholder="Select" style="width: 240px">
      <el-option
        :key="'用户'"
        :label="'用户'"
        :value="'ROLE_USER'"
      />
      <el-option
        :key="'管理员'"
        :label="'管理员'"
        :value="'ROLE_ADMIN'"
      />
    </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="editForm.description"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="showEditUserModal = false">取消</el-button>
          <el-button type="primary" @click="updateUser">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService';
import { ElMessage, ElMessageBox } from 'element-plus'

const users = ref([]);
const searchKey = ref('');
const total = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);


const showEditUserModal = ref(false);
const editForm = ref({
  id: '',
  username: '',
  email: '',
  role: '',
  description: ''
});
function fetchUsers() {
  const params = {
    search: searchKey.value,
    limit: pageSize.value,
    page: currentPage.value
  };
  apiService.fetchWithAuth("admin/user/search?str="+params.search+"&page="+params.page+"&size="+params.limit, "GET", params).then(result => {
    users.value = result.records
    total.value = result.total;
  });
}

function openEditUserModal(row) {
  editForm.value = JSON.parse(JSON.stringify(row));
  showEditUserModal.value = true;
  
}

function updateUser() {
  apiService.fetchJsonWithAuth(`admin/user/${editForm.value.id}`, "PUT", editForm.value).then(() => {
    fetchUsers();
    showEditUserModal.value = false;
  });
}

function deleteUser(id) {
  ElMessageBox.confirm(
    '您确定要删除这首歌吗?', 
    '警告', 
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    apiService.fetchWithAuth(`admin/user/${id}`, "DELETE")
      .then(() => {
        fetchUsers(); // 刷新用户列表
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
  fetchUsers();
}

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
  fetchUsers();
}
</script>


<style scoped>
.search-input {
  margin-bottom: 20px;
}
</style>
