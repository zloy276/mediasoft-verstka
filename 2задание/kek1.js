		var table = document.getElementById('mytable');
			
		table.onmouseout = cBg;
		table.onmouseover = cBg
		function cBg(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			if (typeof target.cellIndex !== 'undefined') {
				if (e.type == 'mouseover') {
					this.className = 'c' + target.cellIndex;
					target.parentNode.className = 'green'
					target.style.backgroundColor = '#fff'
				}
				else {
					this.className = '';
					target.parentNode.className = '';
					target.style.backgroundColor = ''
				}
			}
		};