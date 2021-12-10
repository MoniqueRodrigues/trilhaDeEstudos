
app.controller("indexController", function ($scope) {          


    $scope.titulo = "Boletim escolar";
    $scope.alunos = [{
            nome: "Monique",
            email: "moniqueoliveira0104@gmail.com",
            nota1: 40,
            nota2: 60,
            nota3: 80
        },
        {
            nome: "Ivan",
            email: "ivanoliveira0104@gmail.com",
            nota1: 50,
            nota2: 20,
            nota3: 70
        },
        {
            nome: "Julia",
            email: "juliaoliveira0104@gmail.com",
            nota1: 20,
            nota2: 50,
            nota3: 60
        },
        {
            nome: "Michelle",
            email: "michelleoliveira0104@gmail.com",
            nota1: 30,
            nota2: 50,
            nota3: 80
        },
        {
            nome: "Flávia",
            email: "flaviaoliveira0104@gmail.com",
            nota1: 10,
            nota2: 20,
            nota3: 80
        },


    ]

    //calculo media:
    var init = function () {
        $scope.alunos.forEach(function (aluno) {
            aluno.media = media(aluno);
        });
        limpaForm();
    };

    var media = function (Aluno) {
        var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3) /
            3);
        return media.toFixed(2);


    }


    $scope.abreAddAluno= function(){
        $scope.editando = false;
        // instance.open();
        // $('#modal').openModal();
        limpaForm();


    };

    //adiciona registro aluno novo no modal:
    $scope.addAluno = function (Aluno) {
        Aluno.media = media(Aluno);
        $scope.alunos.push(Aluno);
        // $('#modal').closeModal();

        limpaForm();
     
       
    };

      //EDITA DADOS
    $scope.editando = false;
    var alunoEditar;
      
    $scope.editarAluno=function(Aluno){
        // $('#modal').openModal();
     $scope.editando = true;
      angular.copy(Aluno,$scope.Aluno);    
      alunoEditar = Aluno;       
    }
    $scope.salvarAluno= function(Aluno){
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno)                    
            
    }


    //DELETA DADOS
    $scope.deletarAluno= function(Aluno){
        for(var index in $scope.alunos){
            var aux = $scope.alunos[index];
            if(Aluno === aux){
                $scope.alunos.splice(index,1);
            }
        }
    };






  //limpa formulário:
  var limpaForm = function(){
    $scope.Aluno = {
            nome: "",
            email: "",
            nota1: "",
            nota2: "",
            nota3: "",
            media: ""
        };

  }




    init();
})