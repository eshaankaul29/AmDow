// Default Values for Form Fields
var basic = {
  blur_spread: "16",
  offset_y: "8",
  scale_shrink: "0.85"
}

//Form Field PopUp Function
function MakeField(text, frame) {
  var FieldLabel = [[NSTextField alloc] initWithFrame:frame];
  [FieldLabel setStringValue:text];
 [FieldLabel setEditable:false];
    [FieldLabel setSelectable:false];
  [FieldLabel setBezeled:false];
  [FieldLabel setDrawsBackground:false];
 [FieldLabel setFont:[NSFont boldSystemFontOfSize:14]];

  return FieldLabel;
}

function Prompt(context) {
  //Setting up the PopUp View
  var viewBox = [[NSBox alloc] initWithFrame:NSMakeRect(0, 0, 0, 0)];
  viewBox.title = "AmDow";
  viewBox.titleFont = [NSFont systemFontOfSize:1]
  viewBox.transparent = true


//Creating a Scale (Shrink) Sub-View
  [viewBox addSubview:MakeField("Scale (Shrink)", NSMakeRect(200, 20, 80, 28))];
   //Creating the Inputs
  var ScaleInput = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 0, 80, 24)];
  [ScaleInput setStringValue: basic.scale_shrink];
  [viewBox addSubview: ScaleInput];



  //Creating a Blur Spread Sub-View
  [viewBox addSubview:MakeField("Blur Spread", NSMakeRect(0, 20, 80, 28))];
   //Creating the Inputs
  var BlurInput = [[NSTextField alloc] initWithFrame: NSMakeRect(100, 0, 80, 24)];
  [BlurInput setStringValue: basic.blur_spread];
  [viewBox addSubview: BlurInput];



  //Creating a Offset Sub-View
  [viewBox addSubview:MakeField("Offset (Y+)", NSMakeRect(100, 20, 80, 28))];
   //Creating the Inputs
  var OffsetInput = [[NSTextField alloc] initWithFrame:NSMakeRect(200, 0, 80, 24)];
  [OffsetInput setStringValue: basic.offset_y];
  [viewBox addSubview: OffsetInput];




  [viewBox sizeToFit];

  //Creating a PopUp
  var popup = [[NSAlert alloc] init];
  //Setting Up UI Componenets for the PopUp
  [popup setMessageText: "AmDow Attributes"];  //Adding Title to PopUp
  [popup addButtonWithTitle: "Create 🌈"]; //Creating a PopUp Button
  [popup addButtonWithTitle: "Cancel ✋"]; //Creating another PopUp Button
 //Placing our UI Components to the PopUp
  [popup setAccessoryView:viewBox];

  // Running the PopUp
  var ResponseVal = [popup runModal];

  // Converting the Form Values from String to Numerical

  basic.scale_shrink = Number(ScaleInput.stringValue()) 

  basic.blur_spread = Number(BlurInput.stringValue())

  basic.offset_y = Number(OffsetInput.stringValue())  

  // Return values
  return basic;
}

Prompt()
