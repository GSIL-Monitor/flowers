<template>
    <div class="bgColor">
        <el-form autoComplete="on" label-position="right" :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px" class="login-form">
            <h3 class="title">好多苗后台管理系统</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输入登录密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="submitForm('loginForm')" style="width:100%;">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { isvalidUsername } from './utils/validate'
    export default {
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'));
                } else {
                    callback();
                }
            }

            const validatePass = (rule, value, callback) =>{
                if(value!='123456'){
                    callback(new Error('请输入正确的密码'));
                }else{
                    callback();
                }
            }

            return {
                // 登录数据
                loginForm:{
                    username:'',
                    password:''
                },
                // 验证规则
                loginRules:{
                    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                    password:[{required:true,trigger:'blur',validator:validatePass}]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        // 保留this
                        let _this=this;
                        // 获取用户名和密码
                        console.log(this.loginForm.username+','+this.loginForm.password);
                        // 请求后台api
                        this.axios.post('api',{
                            username:_this.loginForm.username,
                            password:_this.loginForm.password
                        }).then(response => {
                            // console.log(response.data);
                        }).catch(error => {
                            console.log(error);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style>
    body{
        margin: 0;
    }
    .bgColor{
        background-color:#2d3a4b;
        position:fixed;
        width: 100%;
        height: 100%;
    }
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 250px auto;
        border-radius: 5px;
        border:1px solid #fff;
    }
    .title{
        color: #fff;
        font-size: 26px;
        font-weight: 400;
        margin: 0px auto 50px auto;
        text-align: center;
    }
    .el-button{
        margin-top:20px;
    }
</style>

