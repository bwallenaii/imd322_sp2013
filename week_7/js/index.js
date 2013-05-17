document.addEvent("domready", function(){
	var links = $$("#product-list a");
	var container = document.id("product");

	links.addEvent("click", function(e){
		e.stop(); //stop the link from working
		//get the id
		var pid = this.get("data-prodid").toInt();
		//set up the request
		var req = new Request.HTML({
			url:"product.php",
			data:{
				id:pid
			}
		});
		//catch the data
		req.addEvent("success", function(nodes, taglist, html){
			container.set("html", html);
		});
		//send the request
		req.send();
		return false; //stop the link from working
	});
});