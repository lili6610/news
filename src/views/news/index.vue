<template>
  <wrap>
    <div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          v-for="(item,index) in tableTitle"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <template slot-scope="scope">
            <span v-if="item.type=='operat'">
              <span class="edit">
                <i class="el-icon-edit"></i>编辑
              </span>
              <span class="delete">
                <i class="el-icon-delete"></i>删除
              </span>
            </span>
            <span v-if="item.type=='id'">{{scope.$index+1}}</span>
            <span v-if="!item.type">{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </wrap>
</template>
<script>
import wrap from "@/components/common/wrap";
import * as Http from "@/api/article";
export default {
  data() {
    return {
      form:[
        {
          username:'',
          password:''
        }
      ],
      tableTitle: [
        {
          prop: "id",
          label: "ID",
          type: "id"
        },
        {
          prop: "title",
          label: "Title"
        },
        {
          prop: "source",
          label: "Source"
        },
        {
          prop: "categories",
          label: "Categories"
        },
        {
          prop: "date",
          label: "Date"
        },
        {
          prop: "operat",
          label: "Operat",
          type: "operat"
        }
      ],
      tableData: [
        {
          id: "1",
          title: "title",
          source: "source",
          categories: "categories",
          date: "date"
        },
        {
          id: "1",
          title: "title",
          source: "source",
          categories: "categories",
          date: "date"
        },
        {
          id: "1",
          title: "title",
          source: "source",
          categories: "categories",
          date: "date"
        },
        {
          id: "1",
          title: "title",
          source: "source",
          categories: "categories",
          date: "date"
        },
        {
          id: "1",
          title: "title",
          source: "source",
          categories: "categories",
          date: "date"
        }
      ]
    };
  },
  components: {
    wrap
  },
  created() {
  },
  methods: {
  }
};
</script>
<style>
.edit {
  color: #64b6fc;
  cursor: pointer;
}
.delete {
  color: red;
  cursor: pointer;
}
</style>