const APP_NAME = "CRUD APP DG"
const DATABSE_ID = "1UZq1JfP8-nitMtEbC-KfzlDnFF786m_tEHo88MFmbC8"

function doGet() {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .setTitle(APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}


function link(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

/* DEFINE GLOBAL VARIABLES, CHANGE THESE VARIABLES TO MATCH WITH YOUR SHEET */
function globalVariables(){ 
  var varArray = {
    spreadsheetId   : '1UZq1JfP8-nitMtEbC-KfzlDnFF786m_tEHo88MFmbC8', //** CHANGE !!!
    dataRage        : 'Informacion DG!A2:K',                                    //** CHANGE !!!
    idRange         : 'Informacion DG!A2:A1000',                                    //** CHANGE !!!
    lastCol         : 'K',                                            //** CHANGE !!!
    insertRange     : 'Informacion DG!A1:K1',                                   //** CHANGE !!!
    sheetID         : '0'                                             //** CHANGE !!! Ref:https://developers.google.com/sheets/api/guides/concepts#sheet_id
  };
  return varArray;
}
/* READ DATA */
function readData(spreadsheetId,range){
  var result = Sheets.Spreadsheets.Values.get(spreadsheetId, range);
  return result.values;
}

/*GET DROPDOWN LIST */
function getDropdownList(range){
  var list = readData(globalVariables().spreadsheetId,range);
  return list;
}

//RETRIVE DATA FROM GOOGLE SHEET FOR Ministerios DROPDOWN
  function createMinisteriosDropdown() {
      //SUBMIT YOUR DATA RANGE FOR DROPDOWN AS THE PARAMETER
      google.script.run.withSuccessHandler(ministeriosDropDown).getDropdownList("desplegables!A2:A60");
  }
  
//POPULATE Ministerios
  function ministeriosDropDown(values) { //Ref: https://stackoverflow.com/a/53771955/2391195
    var list = document.getElementById('ministerios');   
    for (var i = 0; i < values.length; i++) {
      var option = document.createElement("option");
      option.value = values[i];
      option.text = values[i];
      list.appendChild(option);
    }
  }