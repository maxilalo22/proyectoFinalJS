class Cliente {
    constructor(nombre, razonSocial, direccion, saldo) {
        this.nombre = nombre;
        this.razonSocial = razonSocial;
        this.direccion = direccion;
        this.saldo = saldo;
    }
}
let Clientes = []

const cargaDeClientes = async () => {
    const response = await fetch("./clientes.json")
    const data = await response.json()
    for(let cliente of data){
        let clienteNuevo = new Cliente(cliente.nombre, cliente.razonSocial, cliente.direccion, cliente.saldo)
        Clientes.push(clienteNuevo)
    } 
    localStorage.setItem("clientes", JSON.stringify(Clientes))
    console.log(Clientes)
}


if (localStorage.getItem("clientes")){
    for(let cliente of JSON.parse(localStorage.getItem("clientes"))){
        let clienteNuevo = new Cliente(cliente.nombre, cliente.razonSocial, cliente.direccion, cliente.saldo)
        Clientes.push(clienteNuevo)
        Clientes = JSON.parse(localStorage.getItem("clientes"))}
}else{
    cargaDeClientes()
} 