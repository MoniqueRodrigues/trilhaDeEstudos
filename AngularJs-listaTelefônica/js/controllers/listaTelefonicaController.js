 
 
    app.controller('listaTelefonicaCtrl', function($scope,$http){

        $scope.app = "Lista telefônica"

        // $scope.contatos = [
        //     { nome: $filter('uppercase') ("Monique"), telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        //     { nome: $filter('uppercase') ("Ivan"), telefone: "7777-8888",    data: new Date(), operadora: {nome: "Tim", codigo: 14, categoria: "Celular"}},
        //     { nome: $filter('uppercase') ("Júlia"), telefone: "5555-8888",   data: new Date(), operadora: {nome: "Claro", codigo: 14, categoria: "Celular"}}
        // ];
     
    //   $scope.operadoras = [
    //       {nome:"Oi", codigo:14, preco:2},
    //       {nome:"Vivo", codigo:15, preco:1},
    //       {nome:"Tim", codigo:41, preco:3},  
                              
    //   ];

      $scope.contatos = [];  
      $scope.operadoras = [];                   
    



      //carregando os dados do Banco:
      var carregarContatos = function(){
          $http.get("http://localhost:3000/contatos").then(function(response){
              $scope.contatos = response.data;
            //   console.log($scope.contatos)

          })
      };

      var carregarOperadoras = function(){
          $http.get("http://localhost:3000/operadoras").then(function(response){
              $scope.operadoras = response.data;
            //   console.log($scope.operadoras)


          })

      }; 

  
        $scope.adicionarContato = function(contato){
            // contato.data = new Date();
            console.log("objeto:",angular.toJson(contato.operadora))
            $http.post("http://localhost:3000/contatos",JSON.stringify(contato)     
            ).then(function(response){
                // $scope.contatos = response.data;
                delete $scope.contato;
                $scope.contatoForm.$setPristine();       
                
                // carregarContatos();  

            });
       
                   
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
        $scope.criterioDeOrdenacao= campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        


    };
            
    


    carregarContatos();
    carregarOperadoras();
  

    });




