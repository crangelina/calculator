
var Calculator = {};

Calculator.init = function() {
	this.$button = $("button");
	this.$input = $("#input p");

	this.$button.bind("click", function(e){
		if ($(this).hasClass("clear")) {
			Calculator.clear();
		} else if ($(this).hasClass("equal")) {
			Calculator.evaluate();
		} else {
			Calculator.enterText( $(this).text() );
		} 
	});
};


Calculator.enterText = function(num) { 
	this.$input.append(num); 
};

Calculator.evaluate = function() {
	var answer = eval( this.$input.text() );
	this.$input.text(answer);
}

Calculator.clear = function() {
	this.$input.text("");
}

Calculator.init();


//WHEN KEY PRESSED

$('body').bind("keydown", function(e) {
	switch(e.which) {
		case 48:
			Calculator.enterText(0);
			break;
		case 49:
			Calculator.enterText(1);
			break;
		case 50:
			Calculator.enterText(2);
			break;
		case 51:
			Calculator.enterText(3);
			break;
		case 52:
			Calculator.enterText(4);
			break;
		case 53:
			Calculator.enterText(5);
			break;
		case 54:
			Calculator.enterText(6);
			break;
		case 55:
			Calculator.enterText(7);
			break;
		case 56:
			if (e.shiftKey) {
				Calculator.enterText("*");
			} else {
				Calculator.enterText(8);
			}
			break;
		case 57:
			Calculator.enterText(9);
			break;
		case 187:
			if (e.shiftKey) {
				Calculator.enterText("+");
			} else {
				Calculator.evaluate();
			}
			break;
		case 189:
			Calculator.enterText("-");
			break;
		case 67:
			$input.text("");
			break;
		case 191:
			Calculator.enterText("/");
			break;
		case 13:
			Calculator.evaluate();
			break;
		case 190:
			Calculator.enterText(".");
			break;
	}
});

