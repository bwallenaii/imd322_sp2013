var Writer = new Class({


	initialize: function(element)
	{
		this.element = document.id(element);
		this.tbox = this.element.getElement("form input");
		this.button = this.element.getElement("form button");
		this.notepad = this.element.getElement("div");

		this.button.addEvent("click", this.addNote.bind(this));
	},

	addNote: function(e)
	{
		e.stop();
		
		var entry = new Element("p");
		entry.set("html", this.tbox.get("value"));

		entry.inject(this.notepad);

		this.tbox.set("value", "");

		return false;
	}
});