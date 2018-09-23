var onRun = function(context) {

	var doc = context.document;
	var MyLayer = context.selection

	if (MyLayer.count() == 1) {

		var RealLayer = MyLayer.firstObject();
		var OffSetLayer = RealLayer.frame().y();

		//Alert Mechanism + Taking User Settings
		@import "alert.js";

		//Providing Amdow Settings
		const blur = MSStyleBlur.new();
		blur.isEnabled = true;
		blur.type = 0;
		blur.radius = basic.blur_spread;
		blur.center = {x:0.5, y:0.5};

	//Duplicating the RealLayer and Renaming it
		var duplicate = RealLayer.duplicate()
		duplicate.name = RealLayer.name() + "+AmDow-ed"

		duplicate.style().blur = blur; //Setting the Blur Attributes to the Duplicate Layer
		[MSLayerMovement moveBackward: [duplicate]]; // //Move duplicate layer to the back of its parent.
		duplicate.multiplyBy(basic.scale_shrink);  //Setting the scale of the duplicate layer as per user input/default
		duplicate.frame().midX = RealLayer.frame().midX(); //Giving it an Offset Position
		duplicate.frame().maxY = RealLayer.frame().maxY() + basic.offset_y

	//To set the fill colour as HSB to Duplicate Layer
		duplicate.style().addStylePartOfType(0);
		layerStyle = duplicate.style().fills().lastObject();
		layerStyle.isEnabled = true;
		layerStyle.setFillType(0);
		layerStyle.color = MSColor.colorWithHue_saturation_brightness_alpha(0, 0, 20, 0.2) //Giving the RealLayerOffset a overlay subtle colour

	} else {
		doc.showMessage("🤪 Oops! You can only select one layer at a time...");
	};
};
