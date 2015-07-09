var Breadcrumb = function(url){
	this.url = url;
	
	this.getCrumbs = function(){
		var tmp_contents = '<li><a src=""><i class="fa fa-home"></i></a></li>';
		var tmp_path = this.url.split("assets/data/");
		var is_home = (tmp_path.length == 1);
		if(is_home){
			return tmp_contents;
		}
		else{
			tmp_contents = '<li><a src="" class="active"><i class="fa fa-home"></i></a></li>';
			var tmp_split = tmp_path[1].split("/");
			tmp_split.pop();
			$.each(tmp_split, function( index, value ){
				if(index == tmp_split.length-1){
					tmp_contents += '<li><a src="">'+value+'</a></li>';
				}
				else{
					tmp_contents += '<li><a src="" class="active">'+value+'</a></li>';
				}
			});
		}
		return tmp_contents;
	};
	
	this.contents = this.getCrumbs();
	
	this.displayBreadcrumbs = function(){
		$("#main_breadcrumb").html(breadcrumb.contents);
	};
	
	this.updateBreadcrumbs = function( new_url ){
		this.url = new_url;
		this.contents = this.getCrumbs();
		this.displayBreadcrumbs();
	};
};