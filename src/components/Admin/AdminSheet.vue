<template>
    <div class="playlist-management">
        <el-input v-model="searchKey" placeholder="搜索歌单" @keyup.enter="fetchPlaylists" class="search-input" />
        <el-button @click="fetchPlaylists">搜索</el-button>
        <el-button @click="showAddPlaylistModal = true">添加歌单</el-button>

        <el-table :data="playlists" style="width: 100%">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="歌单名称"></el-table-column>
            <el-table-column prop="source" label="来源"></el-table-column>
            <el-table-column prop="create_user" label="创建用户"></el-table-column>
            <el-table-column prop="create_time" label="创建时间"></el-table-column>
            <el-table-column label="操作">
                <template #default="{ row }">
                    <el-button @click="openEditPlaylistModal(row)">编辑</el-button>
                    <el-button @click="deletePlaylist(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>

        <!-- 添加歌单的模态框 -->
        <el-dialog v-model="showAddPlaylistModal" title="添加歌单">
            <el-form ref="addForm" :model="addForm" label-width="120px">
                <el-form-item label="歌单名称">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="来源">
                    <el-input v-model="addForm.source"></el-input>
                </el-form-item>
                <!-- 更多字段可以根据需要添加 -->
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="showEditPlaylistModal = false">取消</el-button>
                    <el-button type="primary" @click="updatePlaylist">确认</el-button>
                </div>
            </template>
        </el-dialog>

        <!-- 编辑歌单的模态框 -->
        <el-dialog v-model="showEditPlaylistModal" title="编辑歌单">
            <el-form ref="editForm" :model="editForm" label-width="120px">
                <el-form-item label="歌单名称">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="来源">
                    <el-input v-model="editForm.source"></el-input>
                </el-form-item>
                <!-- 更多字段可以根据需要添加 -->
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="showEditPlaylistModal = false">取消</el-button>
                    <el-button type="primary" @click="updatePlaylist">确认</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService';

const playlists = ref([]);
const searchKey = ref('');
const total = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);

const showAddPlaylistModal = ref(false);
const addForm = ref({
    name: '',
    source: ''
});

const showEditPlaylistModal = ref(false);
const editForm = ref({
    id: '',
    name: '',
    source: ''
});

function fetchPlaylists() {
    const params = {
        search: searchKey.value,
        limit: pageSize.value,
        page: currentPage.value
    };
    apiService.fetchWithAuth("playlists/search", "GET", params).then(result => {
        playlists.value = result.data;
        total.value = result.total;
    });
}

function addPlaylist() {
    apiService.fetchWithAuth("playlists/add", "POST", addForm.value).then(() => {
        fetchPlaylists();
        showAddPlaylistModal.value = false;
    });
}

function openEditPlaylistModal(row) {
    editForm.value = { ...row };
    showEditPlaylistModal.value = true;
}

function updatePlaylist() {
    apiService.fetchWithAuth(`playlists/update/${editForm.value.id}`, "PUT", editForm.value).then(() => {
        fetchPlaylists();
        showEditPlaylistModal.value = false;
    });
}

function deletePlaylist(id) {
    apiService.fetchWithAuth(`playlists/delete/${id}`, "DELETE").then(() => {
        fetchPlaylists();
    });
}

function handleSizeChange(newSize) {
    pageSize.value = newSize;
    fetchPlaylists();
}

function handleCurrentChange(newPage) {
    currentPage.value = newPage;
    fetchPlaylists();
}
</script>

<style scoped>
.search-input {
    margin-bottom: 20px;
}
</style>