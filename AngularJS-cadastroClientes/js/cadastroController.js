app.controller('cadastroCtrl', function ($scope){

    $scope.titulo= "Cadastro de clientes";
    $scope.classe1 = "selecionado";



    $scope.clientes = [ 
        {nome: "Monique", codigo: "001", data: new Date(), valor: 200},
        {nome: "Ivan", codigo: "002", data: new Date(), valor:300}, 
        {nome: "Júlia", codigo: "003", data: new Date(), valor: 150}
       


    ];

    $scope.tipoClientes =[
        {tipo:"Pessoa física", codigo:"01", local:"Nacional"},
        {tipo:"Pessoa jurídica", codigo:"02", local:"Nacional"},
        {tipo:"Sócios", codigo:"03", local:"Nacional"},
        {tipo:"Exportador", codigo:"04", local:"Internacional"},
        {tipo:"Importador", codigo:"05", local:"Internacional"}
    ];

    $scope.situacaoClientes =[
        {situacao: "ativo"},
        {situacao:"inativo"}
    ]


 $scope.adicionarCliente = function(cliente){

     $scope.clientes.push(angular.copy(cliente));
     delete $scope.cliente;


 }

 $scope.apagarClientes = function(clientes){
     $scope.clientes= clientes.filter(function(cliente){
         if(!cliente.selecionado) return cliente;   
         alert("cliente apagado com sucesso")        
         
     }); 
 };


 $scope.temClienteSelecionado= function(clientes){
    return clientes.some(function(cliente){
        return cliente.selecionado;
    });  

};
 



});