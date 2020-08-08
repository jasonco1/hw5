$(document).ready(function(){
    //Global variables and constants
    var APIKey= "82a6f450378b5e20686a1d2ccbcd5bc8";
    const checkButton = document.getElementById('chk-btn');
    
    //Event Listeners
    checkButton.addEventListener('click',checkWeather)
    
    function checkWeather(){
        $.ajax({
            method:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather",
            datatype:"json",
            data: { "zip":$("#zipCode").val(), "units":"imperial", "appid":APIKey},
            success:function(result,status){
                //   alert($("#zipCode").val());
                //   alert(result.status);

                $("#zipError").html("");
                
                $("#name").html(result.name);
                $("#description").html(result.weather[0].description);
                $("#temp").html(result.main.temp + " &#8457");
                $("#wind").html(result.wind.speed + " mph");
            }
        })
    }
    
    $("#zipCode").on("change", function(){
        //  alert($("#zipCode").val().length);
        //validation length
        if($("#zipCode").val().length != 5){
            $("#zipError").html("Please enter a valid Zip Code.");
        }else{
            $("#zipError").html("");
        }
    })//zip change
    
    //Change Save Button 
    //TODO Save values to database and remove
    $("#sve-btn").on("click", function(){
        
        
        
        let buttonClass = $(this).prev().attr("class")
        
        if($(this).attr("class") == "btn btn-outline-success"){
            $(this).attr("class", "btn btn-outline-danger");
            $("#sve-btn").html("Remove from Frequent");
        }else{
            $(this).attr("class", "btn btn-outline-success");
            $("#sve-btn").html("Save as Frequent");
        }
    });//function
    
        function updateFrequent(action, imageUrl, keyword) {
        $.ajax({
            method: "get",
            url: "/api/updateFrequent",
            data: {
                "action": action,
                "zip": zip,
                "city": city
            },
            success: function(data, staus) {
            }
        });//function
    }
}); 