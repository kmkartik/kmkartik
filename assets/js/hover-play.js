$(".instru img")
			.mouseenter(function() {
			var a = $($(this).next())[0];
				a.pause();
				a.play();
				a.currentTime = 0;
				
			})
			.mouseleave(function() {
				var a = $($(this).next())[0];
				a.pause();				
				
			});