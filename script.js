 
        var questions = [
          { text: "What is the capital of Germany?", answer: "Berlin" , a:"Paris", b:"London", c: "Berlin" , d:"Madrid" },
          { text: "Who wrote Romeo and Juliet?", answer: "William Shakespeare", a:"abebe", b:"kebede", c:"William Shakespeare" , d:"Alemu"},
          { text: "Where is Ethiopia located?", answer: "East Africa", a:"The southern tip of Africa", b:"South America", c:"Southern Europe" , d:"East Africa"},
          { text: "Who wrote Romeo and Juliet?", answer: "William Shakespeare", a:"abebe", b:"kebede", c:"William Shakespeare" , d:"Alemu"}
      ];
      
      function checkAnswer(choice) {
        document.getElementById("question").textContent= choice.textContent + questions[currentQuestion].answer;
        const selectedAnswer = choice.textContent;
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedAnswer === correctAnswer) {
          choice.classList.add("correct");
      //    document.getElementById("question").textContent= selectedAnswer + correctAnswer;
  
          score++;
      } else {
          choice.classList.add("wrong");
          document.getElementById("answer").style.display = "block";
  
          // document.getElementById("question").textContent= selectedAnswer + correctAnswer;
  
      }
      var myoptionList = document.getElementById("optionList");
      myoptionList.setAttribute("disabled", true);
      myoptionList.style.pointerEvents = "none";
      // myoptionList.style.opacity = "0.5";
  
      document.getElementById("score").textContent = `Score: ${score}`;
  
  }
 