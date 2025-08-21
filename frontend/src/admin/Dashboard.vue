<template>
    <div class="admin-container">
        <div class="d-flex justify-content-between">
            <h1>Админка</h1>
            <button class="btn" @click="handleLogout()">Выйти</button>
        </div>

        <div class="table-responsive">
            <!-- PROJECT TABLE -->
            <table class="table colored-header datatable project-list">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User name</th>
                        <th>User email</th>
                        <th>User phone</th>
                        <th>User user birth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(b) in filterBills.slice()" :key="b.user_id">
                        <td>{{ b.user_id }}</td>
                        <td>{{ b.user_name }}</td>
                        <td>{{ b.user_email }}</td>
                        <td>{{ b.user_phone }}</td>
                        <td>{{ b.user_birth }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
    name: 'Dashboard',

    data() {
        return {
            allUsers: [],
            showOrderDetails: false,
            sendId: undefined,
            interval: "",
        }
    },

    created() {
        this.getAllUser();
        if (!this.admin) {
            this.$router.push("/");
        }
    },

    mounted: function () {
        this.autoUpdate();
    },

    beforeUnmount() {
        clearInterval(this.interval)
    },

    computed: {
        ...mapState(["admin"]),

        filterBills: function () {
            return this.allUsers.filter((b) => b.user_id);
        },
    },

    methods: {
        ...mapMutations(["setAdmin"]),

        async getAllUser() {
            this.allUsers = (await axios.get('/users/users')).data;
        },

        sendBillId: function (id) {
            this.sendId = id
            this.showOrderDetails = !this.showOrderDetails;
        },

        closeView: function () {
            this.showOrderDetails = !this.showOrderDetails;
        },

        handleLogout: function () {
            this.setAdmin("");
        },

        autoUpdate: function () {
            this.interval = setInterval(function () {
                this.getAllUser();
            }.bind(this), 1000);
        }

    },
}
</script>

<style scoped>
.admin-container {
    background-color: #fff;
    height: 100vh;
    padding: 2rem 9%;
    font-size: 16px;
}

.project-list>tbody>tr>td {
    padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
    width: 22px;
    border: 1px solid #CCC;
}

.table-responsive {
    margin-top: 8vh;
}

.action-btn,
.cancel-btn,
.paid-btn {
    width: 100px;
    height: 25px;
    color: white;
    text-transform: capitalize;
}

.action-btn {
    background-color: #0da9ef;
    margin-right: 10px;
}

.cancel-btn,
.paid-btn {
    background-color: red;
}

.action-btn:hover {
    background-color: #27ae60;
}
</style>