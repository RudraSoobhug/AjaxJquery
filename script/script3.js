$(document).ready(function() {
	
		$.ajax({
                url: 'https://dummyjson.com/products',
                type: "GET",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data)
                 {
                	// var json =JSON.parse(data);
                	 console.log(data);
                	 var event_data;
                	 $.each(data.products,function(index,value)
                	 {
                	 	event_data += '<tr id=\"'+value.id+'\">';
                	 	event_data += '<td>' + value.id + '</td>';
                	 	event_data += '<td>' + value.title + '</td>';
                	 	event_data += '<td>' + value.description + '</td>';
                	 	event_data += '<td>' + value.price + '</td>';
                	 
                	 	event_data += '<td><button type=\"button\" class=\"infoBout btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" id=\"'  + value.id + '\">Info</button></td>'
                	 	event_data += '<td><button type=\"button\" class=\"deleteBout btn btn-primary\" id=\"'  + value.id + '\">Remove</button></td>'
                	 	event_data += '</tr>';
                	 });
	                		$('#pdcts').append(event_data);
	                			        		
                },
                error: function(data)
                {
                	console.log('error');
                }
                
            });

		$(document).on("click",'.infoBout', function()
		{
			var id = this.id;
			console.log(id,"button_id");
			new_url = "https://dummyjson.com/products/" + id;
			console.log(new_url);
			$.ajax({
                url: new_url,
                type: "GET",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data)
                 {
                	 	$('#Brand-name').val(data.brand);
                	 	$('#Category-text').val(data.category);
                	 	$('#prdImg').attr('src',data.images[0]);
                	 	$('#prdImg1').attr('src',data.images[1]);
                	 	$('#prdImg2').attr('src',data.images[2]);
                	 	$('#prdImg3').attr('src',data.images[3]);
                	
                },
                error: function(data)
                {
                	console.log('error');
                }
                
           });
		});

		$(document).on("click",'.deleteBout', function()
		{
			var id = this.id;
			console.log(id,"button_id");
			var elment = ("tr" + "#" +id);
			console.log(elment,"elment");
			$(elment).remove();
		});
	
});