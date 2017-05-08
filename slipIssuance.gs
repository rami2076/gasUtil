function insertLastUpdated() {
  //dataView
  var ss = SpreadsheetApp.getActiveSheet(); 
  var currentCell = ss.getActiveCell(); 
  var updateRange = ss.getRange('F' + 1) //更新日をいれる列をstringで指定。この場合はF列
  var auctionLimitDate="";
  if (ss.getSheetName() == "dataView" && currentCell.getColumn()==1){
    ss.getRange(currentCell.getRow(),7).setValue(new Date());
    ss.getRange(currentCell.getRow(),9).setValue("出品完了");
    ss.getRange(currentCell.getRow(),10).setValue("未入金");
    auctionLimitDate = Browser.inputBox("リミット");
    ss.getRange(currentCell.getRow(),8).setValue(auctionLimitDate);
    switch(String(Session.getActiveUser())){
      case String(SpreadsheetApp.getActiveSpreadsheet().getSheetByName("設定").getRange(19, 2).value):
          ss.getRange(currentCell.getRow(),4).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName("設定").getRange(20, 2));
          break;
      case String(SpreadsheetApp.getActiveSpreadsheet().getSheetByName("設定").getRange(19, 3).value) :
          ss.getRange(currentCell.getRow(),4).setValue(SpreadsheetApp.getActiveSpreadsheet().getSheetByName("設定").getRange(20, 3).value);
          break;
    }
  }else{
  //Browser.msgBox("無し");
  }
  
  
  
  
  
  //Logger.log(updateRange);
  //更新日の記入
//  if(currentRow>1){ 
  ////  if(currentCell) { 
     // updateRange.setValue(new Date());
    }
  
