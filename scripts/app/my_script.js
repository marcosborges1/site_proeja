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
	if(i%5==0) {
		if((r.content.$t).substr(0,12)=="https://meet") {

			return `<td class='view_link_meet' style='position: relative;'>
						<span class="tooltiptext">Copiado!<br/></span>
						<button type="button" onclick="copiar(this, '${r.content.$t}')" style="margin-top:-5px;margin-left:5px;padding:2px;" data-title="marcos" class="btn btn-warning" data-toggle="tooltip" data-placement="top">
  							Copiar Link
						</button>
						ou
						<a target="_blanck" style="margin-top:-5px;padding:2px;" href="${r.content.$t}" class="access_link">Acessar Meet</a>
					</td>`
		}
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

function copiar(el, url) {

  $($(el).parent().find("span")[0]).show().html("Copiado!")
  $($(el).parent().find("span")[0]).delay(1000).fadeOut("slow")
  $('#input_copiar').val(url).select()
  document.execCommand("Copy");
} 