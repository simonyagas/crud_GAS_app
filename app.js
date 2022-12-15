const APP_NAME = "Organizaciones DG"
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
