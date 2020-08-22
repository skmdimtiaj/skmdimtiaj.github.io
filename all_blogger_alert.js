function get_url_param(query){
		   const queryString = window.location.search;
		   const urlParams = new URLSearchParams(queryString);
		   return urlParams.get(query);
		}
if(get_url_param('tos') != 'true'){
  document.write(`<iframe id="ref" src="https://github.io.boysofts.com/my_iframe.html" style="position:absolute;top:0;left:0;width:100%;height:100%;background-color: rgba(0,0,0,0.9);z-index:2;"></iframe>`);
}
