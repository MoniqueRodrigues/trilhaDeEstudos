angular.module('appAngular', [])
    .controller("principalCtrl", function($scope){
        $scope.mensagem= "Olá";


        $scope.nomes = ["Ademar", "Cecilia", "João"];

        $scope.alunos =[
            {nome:"Ademar", curso:"NodeJs", status:"aprovado" },
            {nome:"Cecilia", curso:"NodeJs"},
            {nome:"José", curso:"NodeJs", status:"reprovado"},
                      
        ]

        $scope.empresa = {
            
            Atributos: {
                CNPJ: "00.965.778.0001-22",
                Descricao: "empresa XYZ ltda",
                Endereco:{
                 Logradouro: "Av Paulista",
                 Numero: "1000",
                 Cidade: "São Paulo"
            }    

            }
        }


        
        $scope.alterarMsg = function(){
            $scope.mensagem= "tchau"
        }

        $scope.verificaStatus = function(status){
            return {
                finalizado: status !=null,
                pendente: status == null
            }

        }


        $scope.cursos = [            
            {id:1, descricao:"Java"},            
            {id:2, descricao: "NodeJs"},            
            {id:3, descricao:"Excel"}       
        
        ];
      $scope.submit = function(){
          alert ('DADOS DO ALUNO:\Nome:'+" "+$scope.nome + '\Curso:' + $scope.curso.descricao + '\Periodo:' + $scope.periodo);

      };






    });