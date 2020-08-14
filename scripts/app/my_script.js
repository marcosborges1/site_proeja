const getInformacoesProejaPorCodigo = (codigo) => {
	$.getJSON(`https://spreadsheets.google.com/feeds/cells/1nvHPe949X6WV_toO7MwNhikiPAREo5Sn4uBzN-jru58/${codigo}/public/full?alt=json`, (data)=> {

		let x = ""
		data.feed.entry.map((r,i)=> {

		  if(i>5) {
		    if(i%5==1) x += `<tr>`
		    x+=tupla(r,i)
		    if(i%5==0) x += `</tr>`
		  }
		})

		$(`#loading_${codigo}`).hide()
		$(`#proeja_turma_${codigo}`).html(x) 
		showHorario(codigo)
		
	})
}
function tupla(r,i) {

	if(i%5==2 || i%5==4) {
		return `<td class="border-0 d-none d-lg-block d-sm-none d-md-block">${r.content.$t}</td>`
	}
	return `<td>${r.content.$t}</td>`
}

function showHorario(codigo) {
	$(`#proeja_turma_${codigo}`).find("td").map((i,x)=>{
		if(i%5==2) {
			let object = $(`#proeja_turma_${codigo}`).find("td")[i]
			let nextObject = $($(`#proeja_turma_${codigo}`).find("td")[i+1]).html()
			$(object).html($(object).html()+ `<u class='border-0 d-block d-lg-none d-sm-none d-md-none'>${nextObject}</u>`)
		}
	})   
}