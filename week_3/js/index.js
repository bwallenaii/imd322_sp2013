document.addEvent("domready", function(){
	
	$$("input[name='contest']").addEvent("click",function(){
		var section = this.get("value");
		$$(".hidden-section").dissolve();
		document.getElement("div[data-contest='" + section + "']").reveal();
		//div[data-contest='puppy']
	});
});