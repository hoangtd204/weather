$(document).ready(function () {

  //onclick Enter
  $(".inputLocation").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;

    if (keycode == "13") {
      event.preventDefault();
      isReasult();
    }

    $(".search").click(function () {
      isReasult();
    });
  });



  //Onload
  $(document).ready(function () {
    isReasultDefault();
  });


});


function isReasultDefault() {
  const defaultSeverAPI =
    "http://api.weatherapi.com/v1/current.json?key=9683829700c84a269be72831231808&q=ha noi&aqi=yes";
  $.get(defaultSeverAPI, function (datas, status) {
    isReasultWeather(datas);
  })
}


//Logic
function isReasult() {
  let severAPI = "http://api.weatherapi.com/v1/current.json?key=9683829700c84a269be72831231808&q= &aqi=yes";

  let dataUser = $(".inputLocation").val();
  let weatherApi = severAPI.replace(" ", dataUser);

  $.get(weatherApi, function (datas, status) {

    isReasultWeather(datas);
  })
}

function isReasultWeather(values) {
  const isLocation = values.location.name;
  const isfeelslike_c = values.current.feelslike_c;
  const ishumidity = values.current.humidity;
  const isuvIndex = values.current.uv;
  const iswind_kph = values.current.wind_kph;
  const istemperature = values.current.temp_c
  const isDate = new Date();
  const isHours = isDate.getHours();
  console.log(values);
  const isToday =
    isHours +
    ":" +
    isDate.getMinutes() +
    "   " +
    isDate.getDate() +
    "-" +
    (isDate.getMonth() + 1) +
    "-" +
    isDate.getFullYear();


  //display data
  $(".location").html(function () {
    return isLocation;
  });

  $(".todayDate").html(function () {
    return isToday;
  });


  $(".weather-feelslike_c").html(function () {
    return isfeelslike_c + "°";
  });

  $(".weather-uvIndex").html(function () {
    return " Chỉ số UV:"+isuvIndex;
  });

  $(".weather-humidity").html(function () {
    return "Độ ẩm:" + ishumidity + "%";
  });
  $(".weather-temperature").html(function () {
    return "Nhiệt độ:"+ istemperature + "°C";
  })
  $(".wind_speed").html(function () {
    return "Gió:" + iswind_kph + "  km/h";
  })


  if (isHours >= 19 || isHours <= 4) {
    $(".display-data").html(function () {
      $(".display-data").css({
        "background-image": "url(images/pexels-miriam-espacio-365633.jpg)",
      });
      $(".icon-weather").attr("src", "images/moon (1).png");
    });


  } else {
    if (istemperature < 34 && ishumidity < 90 && ishumidity > 30) {
      $(".display-data").html(function () {
        $(".display-data").css({
          "background-image": "url(images/04099_dataibaysunset_1920x1080.jpg)",
        });
        $(".icon-weather").attr("src", "images/cloudy (1).png");
      });
    }

    if (istemperature >= 34) {
      $(".display-data").html(function () {
        $(".display-data").css({
          "background-image": "url(images/chup-anh-khi-troi-nang-gat.jpg)",
        });

        $(".icon-weather").attr("src", "images/sun.png");
      });
    }

    if (istemperature < 34 && ishumidity > 90) {
      $(".display-data").html(function () {
        $(".display-data").css({
          "background-image": "url(anh-bau-troi-am-u-dep-nhat_022454740.jpg)",
        });
        $(".icon-weather").attr("src", "images/cloudy.png");
      });
    }

  }
}