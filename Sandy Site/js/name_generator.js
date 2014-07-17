
$(".talk_button").hide();
$(".answer_button").hide();

function say_name(){
  var letter1 = Math.floor((Math.random() * 25) + 65);
  var letter2 = Math.floor((Math.random() * 25) + 65);
  var letters = String.fromCharCode(letter1,letter2);

  var numbers = Math.floor((Math.random() * 899) + 100 );

  return letters + "-" + numbers;
};

function talk(){
  var chat = ["I don't really care.", "Yeah, that's what your mom said last night.", "Why are you talking to me?", "That's bullshit.", "That's nothing. Let me tell you what I went through...", "Say what!? Fuck outta here.", "Umm. You're kinda lame.", "Maybe it's time to end it.", "If you call me 'Useless' one more time..."];
  var num = Math.floor((Math.random() * chat.length) + 0 );
  $(".console").html("Hey, what's bothering you. You can talk to me.");
  
  $(".answer_button").show(function(){
    $(".answer_button").click(function(){
        //alert("Hi");
        var user_input = prompt("Respond to Lame-O Robo 4000.")

        if (user_input != ""){
          // alert("HELLO");
          $(".console").html(chat[num]);
        }
        else{
          alert("Goodbye")
        }

    });
  });
};

function robot_name(){
  $("#name").click(function(){
    $(".display-name").append('<span class="robo-name">HELLO</span>');
    $(".robo-name").html(say_name()); //<< replace with function
    $(this).html("Reset");
    $(".talk_button").show(function(){
      $(".talk_button").click(function(){
        talk();
      });
    });
    
    $(this).click(function(){
      $(".robo-name").remove();
      $(".console").html("");
      $(this).html("Generate!");
      $(".talk_button").hide();
      $(".answer_button").hide();
      robot_name();
    });
  });
};


robot_name();
