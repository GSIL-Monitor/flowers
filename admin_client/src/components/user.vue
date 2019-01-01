<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      prop="sort"
      label="序号"
      width="80">
    </el-table-column>
     <el-table-column
      prop="nickname"
      label="昵称"
      width="180"
      >
    </el-table-column>
     <el-table-column
      prop="real_name"
      label="联系人"
      width="180">
    </el-table-column>
         <el-table-column
      prop="phone"
      label="联系电话"
      >
    </el-table-column>
         <el-table-column
      prop="company_name"
      label="企业名称"
     >
    </el-table-column>
             <el-table-column
      prop="company_address"
      label="位置"
      width="180">
    </el-table-column>
         <el-table-column
      prop="business"
      label="主营业务"
     >
    </el-table-column>

    <el-table-column
      prop="date"
      label="加入时间"
      sortable
      width="180">
    </el-table-column>
    
  </el-table>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      tableData: [
        {
          sort: 1,
          nickname: "夜色",
          real_name: "田春乐",
          phone: "18660785163",
          company_name: "山东讯多多信息科技有限公司",
          company_address: "山东济南",
          business: "软件研发、技术服务、产品推广",
          date: "2018-09-28"
        },
        {
          sort: 2,
          nickname: "王光",
          real_name: "王光",
          phone: "",
          company_name: "山东讯多多信息科技有限公司",
          company_address: "山东济南",
          business: "软件研发、技术服务、产品推广",
          date: "2018-09-29"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    myajax: function() {
      let _this=this;
      _this.$http.get("/api/user/getUserList").then(
        response => {
          console.log("获取信息成功");
          console.log(response);
        },
        response => {
          console.log("获取信息失败");
          console.log(response);
        }
      );
    }
  },
  created() {
    this.myajax();
  }
};
</script>