enyo.kind({
	name: "moon.sample.GridListSample",
	classes: "moon enyo-unselectable enyo-fit",
	components: [
		{kind: "enyo.Spotlight"},
		{
			name: "gridlist",
			kind: "moon.GridList",
			classes: "enyo-fill",
			onSetupItem: "setupItem",
			toggleSelected: true,
			itemWidth: 140,
			itemHeight: 140,
			itemSpacing: 100,
			components: [
				{name: "item", kind: "moon.GridList.ImageItem"}
			]
		}
	],
	create: function() {
		this.inherited(arguments);
		this.$.gridlist.show(50);
	},
	setupItem: function(inSender, inEvent) {
		var i = inEvent.index;
		this.$.item.setSource("./assets/default-music.png");
		this.$.item.setCaption("Item " + i);
		this.$.item.setSubCaption("Sub Caption");
		this.$.item.setSelected(this.$.gridlist.isSelected(i));
	}
});
