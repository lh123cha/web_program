<template>
  <div class="title">
    <span>总数量：3223个</span>
    <el-button  icon="el-icon-setting" class="fl">操作</el-button>
    <el-select v-model="value5" multiple placeholder="标记" class="fl">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value5" multiple placeholder="筛选项" class="fl">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="demo-input-suffix fl">
      <el-input
        placeholder="请输入APP名称或运营商名称"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </div>
    <div class="container_table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="appname"
          label="APP名称"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="apkname"
          label="包名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          sortable
          label="类型">
        </el-table-column>
        <el-table-column
          prop="comp_name"
          sortable
          label="运营企业名称">
        </el-table-column>
        <el-table-column
          prop="type_number"
          label="版本号">
        </el-table-column>
        <el-table-column
          prop="update_date"
          sortable
          label="更新时间">
        </el-table-column>
        <el-table-column
          prop="download_num"
          sortable
          label="下载量（万）">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--<el-button type="warning" icon="el-icon-star-off" circle></el-button>-->
            <el-button type="primary" icon="el-icon-star-on" v-if="istag" @click='switchChange'></el-button>
            <el-button type="primary" icon="el-icon-star-off" v-else="!istag" @click='switchChange'></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fy"
                     layout="prev, pager, next"
                     @current-change="current_change"
                     :total="total"
                     background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name:'list11',
  data() {
    return {
      total:1000,//默认数据总数
      pagesize:9,//每页的数据条数
      currentPage:1,//默认开始页面
      istag: true,
      input:"",
      input21: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value5: [],
      tableData: [
        {
          appname: '1喵喵直播',
          apkname: '1bdkdl',
          type: '3视频直播',
          comp_name: '1广大科技公司',
          type_number: '1V1.2',
          update_date: '12016-05-02',
          download_num: '123.6'
        },
        {
          appname: '2喵喵直播',
          apkname: '2bdkdl',
          type: '2视频直播',
          comp_name: '2广大科技公司',
          type_number: '2V1.2',
          update_date: '22016-05-02',
          download_num: '223.6'
        },
        {
          appname: '3喵喵直播',
          apkname: '1bdkdl',
          type: '3视频直播',
          comp_name: '3广大科技公司',
          type_number: '3V1.2',
          update_date: '32016-05-02',
          download_num: '323.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
        {
          appname: '4喵喵直播',
          apkname: '4bdkdl',
          type: '4视频直播',
          comp_name: '4广大科技公司',
          type_number: '4V1.2',
          update_date: '42016-05-02',
          download_num: '423.6'
        },
      ]
    };
  } ,
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 0) {
        return 'th';
      }
      return '';
    },
    switchChange(){
      this.istag = !this.istag ;

    },

    current_change:function(currentPage){
      this.currentPage = currentPage;
    }
  },
  created:function(){
    this.total=this.tableData.length;
  },
};
</script>

<style>
.fl{
  float: right;
  margin-right:20px;
}
.fy{
  text-align:center;
  margin-top:30px;
}
.title{
  height:100%;
}
</style>
