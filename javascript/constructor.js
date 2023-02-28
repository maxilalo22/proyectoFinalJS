
let Clientes = []

const cargaDeClientes = async () => {
    const response = await fetch("clientes.json")
    const Clientes = await response.json()
    for(let cliente of data){
        let clienteNuevo = new Cliente(cliente.nombre, cliente.razonSocial, cliente.direccion, cliente.saldo)
        Clientes.push(clienteNuevo)
    } 
    localStorage.setItem("clientes", JSON.stringify(Clientes))
    console.log(Clientes)
}
cargaDeClientes()

if (localStorage.getItem("clientes")){
    for(let cliente of JSON.parse(localStorage.getItem("clientes"))){
        let clienteNuevo = new Cliente(cliente.nombre, cliente.razonSocial, cliente.direccion, cliente.saldo)
        Clientes.push(clienteNuevo)
        Clientes = JSON.parse(localStorage.getItem("clientes"))}
}else{
    cargaDeClientes()
} 