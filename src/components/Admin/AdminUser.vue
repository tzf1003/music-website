<template>
    <el-container>
      <el-header>
        <el-input v-model="searchQuery" placeholder="搜索用户..."></el-input>
        <el-button @click="fetchUsers">搜索</el-button>
      </el-header>
      <el-main>
        <el-table :data="users" style="width: 100%">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="role" label="角色"></el-table-column>
          <el-table-column label="操作">
            <template #default="{row}">
              <el-button @click="editUser(row)">编辑</el-button>
              <el-button @click="deleteUser(row)" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalUsers">
        </el-pagination>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import apiService from '@/tools/apiService';
  
  const users = ref([]);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const pageSize = ref(10);
  const totalUsers = ref(0);
  
  const fetchUsers = () => {
    const params = {
      page: currentPage.value,
      size: pageSize.value,
      search: searchQuery.value
    };
    apiService.fetchWithAuth("users/list", "GET", params).then((result) => {
      users.value = result.users;
      totalUsers.value = result.total;
    });
  };
  
  const editUser = (user) => {
    // 弹窗或其他方式编辑用户
  };
  
  const deleteUser = (user) => {
    apiService.fetchWithAuth(`users/delete/${user.id}`, "DELETE").then(() => {
      fetchUsers(); // 刷新列表
    });
  };
  
  const handleSizeChange = (newSize) => {
    pageSize.value = newSize;
    fetchUsers();
  };
  
  const handleCurrentChange = (newPage) => {
    currentPage.value = newPage;
    fetchUsers();
  };
  </script>
  
  <style scoped>
  </style>
  