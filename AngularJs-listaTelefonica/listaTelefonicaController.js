 
    var app = angular.module('listaTelefonica', ["ngMessages"]);
    app.controller('listaTelefonicaCtrl', function($scope){

        $scope.app = "Lista telefônica"

        $scope.contatos = [
            { nome: "Monique", telefone: "99998888", data: new Date()},
            { nome: "Ivan", telefone: "77778888",    data: new Date()},
            { nome: "Júlia", telefone: "55558888",   data: new Date()}
        ];


      $scope.operadoras = [
          {nome:"Oi", codigo:14},
          {nome:"Vivo", codigo:15},
          {nome:"Tim", codigo:41},  
                              
      ];





        $scope.adicionarContato = function(contato){
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();


            
        };

        $scope.apagarContatos = function(contatos){
            $scope.contatos = contatos.filter(function(contato){
                if(!contato.selecionado) return contato;
                
            });
        };


        $scope.isContatoSelecionado = function(contatos){
            return contatos.some(function(contato){
                return contato.selecionado;            

        });
    };

    $scope.ordenarPor = function(campo){
        


    }





               

    });




