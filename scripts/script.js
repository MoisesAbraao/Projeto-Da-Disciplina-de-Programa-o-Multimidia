function arrastar(ev){
			ev.dataTransfer.setData("text", ev.target.id);
		}

function permitirSoltar(ev){
	ev.preventDefault();
	}

function soltar(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text", ev.target.id);
	ev.target.appendChild(document.getElementById(data));
	}