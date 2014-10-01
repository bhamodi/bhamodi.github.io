$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		
		var g = [
		// B
		new Point(10, 10, 0.0, 9, "#1c48dd"), new Point(10, 30, 0.0, 9, "#3355d8"), new Point(10, 50, 0.0, 8, "#2a59f0"), new Point(10, 70, 0.0, 8, "#3059e3"),
		new Point(10, 90, 0.0, 8, "#2855ea"), new Point(10, 110, 0.0, 8, "#2650e1"), new Point(30, 10, 0.0, 7, "#2a5cf4"), new Point(28, 57, 0.0, 8, "#3d65e7"),
		new Point(30, 110, 0.0, 8, "#6084ef"), new Point(45, 10, 0.0, 7, "#3769f6"), new Point(43, 58, 0.0, 7, "#5681f5"), new Point(48, 110, 0.0, 8, "#5683f7"),
		new Point(62, 42, 0.0, 6, "#5683f7"), new Point(60, 15, 0.0, 7, "#4779f7"), new Point(55, 51, 0.0, 8, "#1c48dd"), new Point(58, 64, 0.0, 6, "#4577f6"),
		new Point(63, 108, 0.0, 7, "#4577f6"), new Point(66, 30, 0.0, 9, "#1c48dd"), new Point(70, 72, 0.0, 6, "#507bf2"), new Point(75, 100, 0.0, 6, "#507bf2"),
		new Point(75, 85, 0.0, 9, "#1c48dd"),
		// A
		new Point(97, 86, 0.0, 6, "#ee5257"), new Point(100, 95, 0.0, 6, "#e02e3d"), new Point(101, 76, 0.0, 5, "#ef5c5c"), new Point(105, 105, 0.0, 6, "#cf2a3f"),
		new Point(108, 66, 0.0, 6, "#f4716e"), new Point(117, 113, 0.0, 8, "#cf4055"), new Point(123, 62, 0.0, 6, "#f0696c"), new Point(137, 67, 0.0, 6, "#e74653"),
		new Point(137, 110, 0.0, 8, "#cd4359"), new Point(145, 79, 0.0, 8, "#d82038"), new Point(146, 95, 0.0, 8, "#c41731"), new Point(153, 115, 0.0, 8, "#cd4359"),
		// R
		new Point(193, 85, 0.0, 7, "#269230"), new Point(180, 60, 0.0, 9, "#1f9e2c"), new Point(180, 77, 0.0, 9, "#36b641"), new Point(180, 95, 0.0, 8, "#0b991a"),
		new Point(180, 113, 0.0, 8, "#10a11d"), new Point(200, 75, 0.0, 8, "#36b641"), new Point(210, 65, 0.0, 8, "#36b641"),
		// A
		new Point(226, 85, 0.0, 6, "#f7b326"), new Point(229, 73, 0.0, 6, "#f8c247"), new Point(229, 99, 0.0, 8, "#efa11e"), new Point(238, 64, 0.0, 6, "#facb5e"),
		new Point(245, 111, 0.0, 8, "#eb9c31"), new Point(254, 62, 0.0, 6, "#fac652"), new Point(262, 105, 0.0, 9, "#ed9d33"), new Point(268, 71, 0.0, 8, "#f9b125"),
		new Point(274, 89, 0.0, 9, "#ef9a1e"), new Point(280, 110, 0.0, 8, "#ed9d33"),
		// A
		new Point(297, 86, 0.0, 6, "#ee5257"), new Point(300, 95, 0.0, 6, "#e02e3d"), new Point(301, 76, 0.0, 5, "#ef5c5c"), new Point(305, 105, 0.0, 6, "#cf2a3f"),
		new Point(308, 66, 0.0, 6, "#f4716e"), new Point(317, 113, 0.0, 8, "#cf4055"), new Point(323, 62, 0.0, 6, "#f0696c"), new Point(337, 67, 0.0, 6, "#e74653"),
		new Point(337, 110, 0.0, 8, "#cd4359"), new Point(345, 79, 0.0, 8, "#d82038"), new Point(346, 95, 0.0, 8, "#c41731"), new Point(353, 115, 0.0, 8, "#cd4359")];
		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
			g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('mousemove', onMove);
		jQuery(function($){
			var windowWidth = $(window).width();
			$(window).resize(function() {
				if(windowWidth != $(window).width()){
					location.reload();
					return;
				}
			});
		});
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {	
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});