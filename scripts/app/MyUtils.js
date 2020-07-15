class MyUtils {

	static includeHTML() {

	  $("div[data-includeHTML]").each(function () {                
	      $(this).load($(this).attr("data-includeHTML"));
	  }) 
	}

	static createDataProeja() {
		$("#proeja_turma").html("tes")
        // 
	}

}