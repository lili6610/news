export default{
    install(Vue,options){
        //列表行样式调整
        Vue.prototype.rowStyle = function({row, rowIndex}){
           if(rowIndex%2 === 0){
              return 'background:#ffffff'
           }else{
              return 'background:#ECF5FF'
           } 
        },
        //列表表头样式
        Vue.prototype.headerCellStyle = function() {
            return {
              background: "rgba(244,247,253,1)",
              color: "#333",
              textAlign: 'center'
            }
        },
          Vue.prototype.cellStyle = function() {
            return {
              color: "#333"
            }
          },
        //时间格式化
        Vue.prototype.dataFormYM = (val) => {
          var result = String(val);
          if (result == "null") {
            return "";
          } else {
            return result.replace("T", " ").substring(0, 16);
          }
        },
        //导出csv文件
        Vue.prototype.downloadCsv=(obj)=>{
          //文件value值
          var prop = obj.prop;
          var data = obj.data;
          var str = [];
          str.push(obj.title.join(",")+"\n");
          for(var i=0;i<data.length;i++){
            var temp = [];
            for(var j=0;j<prop.length;j++){
              if(data[i][prop[j]] && typeof data[i][prop[j]] === 'string') temp.push(data[i][prop[j]].replace(/(\r\n|\n|\r|;)/g, ""));
              else temp.push(data[i][prop[j]]);
            }
            str.push(temp.join(",")+"\n");
          }
          var uri = "\uFEFF" + str.join("");
          var blob = new Blob([uri], {type: 'text/plain'})
          var downloadLink = document.createElement("a");
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = obj.fileName; 
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink); 
        }
    }
}
