<!--
 * @Author: 871423948@qq.com
 * @Date: 2023-07-25 15:52:19
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-07-27 18:02:04
 * @Description: 表格自动滚动
-->
<template>
  <div class="">
    <b>数据量：{{ tableData.length }}</b>
    <div class="table-box">
      <vue-seamless-scroll
        v-if="updateFlag"
        :data="tableData"
        :class-option="classOption"
      >
        <el-table
          :data="tableData"
          isdrag
          :no-hover="true"
          style="width: 100%"
          height="100%"
          class="t-table"
          :row-class-name="rowClassNameFn"
          header-row-class-name="t-header"
          size="medium"
          @sort-change="sortChangeFn"
        >
          <el-table-column
            type="index"
            label="序号"
            width="50"
            align="center"
          >
            <template slot-scope="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
            sortable="custom"
          />
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip
          />
        </el-table>
      </vue-seamless-scroll>
    </div>
    <div>----------------------------------------分界线----------------------------------------</div>
    <b>数据量：{{ tableData.length }}</b>
    <div class="table-box">
      <el-table
        ref="tableData"
        :data="tableData"
        isdrag
        :no-hover="true"
        style="width: 100%"
        height="100%"
        class="t-table"
        :row-class-name="rowClassNameFn"
        header-row-class-name="t-header"
        size="medium"
        @sort-change="sortChangeFn"
        @cell-mouse-enter="stopScrollFn"
        @cell-mouse-leave="autoScrollFn"
      >
        <el-table-column
          type="index"
          label="序号"
          width="50"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
          sortable="custom"
        />
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip
        />
      </el-table>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import vueSeamlessScroll from "vue-seamless-scroll";
import "@/assets/styles/table.scss";
import resData from "@/data/table.json";
export default {
  name: "TableAutoScroll",
  // 引入组件
  components: { vueSeamlessScroll },
  props: {},
  data() {
    // 这里存放数据
    return {
      updateFlag: true,
      dataTimer: null, // 模拟数据更新的定时器
      tableData: [],
      scrollTimer: null, // 自动滚动的定时器
      scrollInitFlag: true, // 自动滚动初始化，是否从头开始滚
    };
  },
  // 监听属性 类似于data概念
  computed: {
    classOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 5, // 开始无缝滚动的数据量
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 500, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("---------", resData);
    this.dataTimer = setInterval(() => {
      this.getDataFn();
    }, 5000); // 20s更新一次数据
    this.autoScrollFn();
  },
  // 生命周期 - 销毁之前
  beforeDestroy() {
    clearTimeout(this.dataTimer);
    this.dataTimer = null;
    this.stopScrollFn();
  },
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {
    getDataFn() {
      // 模拟调用后端接口--动态更新数据
      const n = Math.round(Math.random() * 14) + 5; // 5-20以内的随机整数
      this.tableData = resData.slice(0, n);
      // 强制更新dom
      this.updateFlag = false;
      setTimeout(() => {
        this.updateFlag = true;
      }, 100);
      // ------------------------
      console.log("n-----------===", n, this.tableData);
    },
    rowClassNameFn({ rowIndex }) {
      if (rowIndex % 2 !== 0) {
        return "row-odd";
      }
    },
    // 排序
    sortChangeFn({ column, prop, order }) {
      console.log(column, prop, order);
      // 调用后端接口
      this.getDataFn();
      this.scrollInitFlag = true;
    },
    // 表格自动滚动
    autoScrollFn() {
      clearInterval(this.scrollTimer);
      this.$nextTick(() => {
        const tBody =
          this.$refs.tableData.$refs.bodyWrapperScrollbar.$refs.wrap;
        // 当可视窗口高度大于表格高度时，不滚动
        if (tBody.clientHeight > tBody.scrollHeight) {
          return;
        }
        if (this.scrollInitFlag) {
          tBody.scrollTop = 0;
          this.scrollInitFlag = false;
        }
        this.scrollTimer = setInterval(() => {
          tBody.scrollTop += 1; // 每次上滑一个像素
          // 当滚动到最底部(可视高度+距离顶部=整个高度)时，从头开始滚
          if (tBody.clientHeight + tBody.scrollTop === tBody.scrollHeight) {
            tBody.scrollTop = 0;
          }
        }, (1000 / 60) * 3); // 1000 / 60
      });
    },
    stopScrollFn() {
      clearInterval(this.scrollTimer);
      this.scrollTimer = null;
    },
  },
};
</script>
<style lang='scss' scoped>
</style>
