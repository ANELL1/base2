const actions = require('../actions/userActions')


const loginAdminAlfa  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.loginAdminAlfa(variable)
}

const loginEmpresas  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.loginEmpresas(variable)
}

const getTablaClientes =  (_ , data) =>{    
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getTablaClientes(variable)
}

const getEmpresas =  (_ , data) =>{    
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getEmpresas(variable)
}

const getCotizacionesTabla  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getCotizacionesTabla(variable)

}

const getIdCotizacion  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getIdCotizacion  (variable)

}
const getClienteRFC   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getClienteRFC(variable)
}

const getTablaProductoServicio   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getTablaProductoServicio(variable)
}

const getProductoServicio   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getProductoServicio(variable)
}
const getTablaClientesAlfa   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getTablaClientesAlfa(variable)
}

const getIdClientesAlfa   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getIdClientesAlfa(variable)
}

const getTablaContactos  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 return actions.getTablaContactos(variable)
}

const getProductoServicioByFolio   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getProductoServicioByFolio(variable)
}

const getTotalesByFolio   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetTotalesByFolio(variable)
}

const getClienteId   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetClienteId(variable)
}

const getContactosId   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getContactosId(variable)
}

const getCotizacionFk_Contactos   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getCotizacionFk_Contactos(variable)
}
const getClienteByCorreo   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetClienteByCorreo(variable)
}
const loginClientes   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.LoginClientes(variable)
}
const getCotizacionByFolio   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getCotizacionByFolio(variable)
}
const getAdminAlfa  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetAdminAlfa(variable)
}
const getURLVideos  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getURLVideos(variable)
}

const getPolizas  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetPolizas(variable)
}
const getPoliza  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetPoliza(variable)
}
const getTableInicioSesion  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetTableInicioSesion(variable)
}
const getVentasTablaIndicadores  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getVentasTablaIndicadores(variable)
}
const getVentasTabla  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getVentasTabla(variable)
}

const getIdVenta  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getIdVenta(variable)
}
const getTotalesByFolioVenta  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getTotalesByFolioVenta(variable)
}
const getProductoServicioByFolioVentas  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getProductoServicioByFolioVentas(variable)
}
const getMaxProductoServicio  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getMaxProductoServicio(variable)
}
const getProductoServicioActualizado  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetProductoServicioActualizado(variable)
}
const getCotizacionesFolio  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getCotizacionesFolio(variable)
}

const getAllTablaProductoServicio  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.getAllTablaProductoServicio(variable)
}
const getCupones  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetCupones(variable)
}
const getSolicitudes  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetSolicitudes(variable)
}
const getSolicitudesByFkEmpresa  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetSolicitudesByFkEmpresa(variable)
}

const getSupport  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
return actions.GetSupport(variable)
}

module.exports={
    getSupport,
    getSolicitudesByFkEmpresa,
    getSolicitudes,
    getCupones,
    getAllTablaProductoServicio,
    getCotizacionesFolio,
    getProductoServicioActualizado,
    getMaxProductoServicio,
    getVentasTablaIndicadores,
    getProductoServicioByFolioVentas,
    getTotalesByFolioVenta,
    getIdVenta,
    getVentasTabla,
    getTableInicioSesion,
    getPoliza,
    getPolizas,
    getURLVideos,
    getAdminAlfa,
    getCotizacionByFolio,
    getClienteByCorreo,
    loginClientes,
    getCotizacionFk_Contactos,
    getContactosId,
    getClienteId,
    getTotalesByFolio,
    getProductoServicioByFolio,
    getTablaContactos,
    getIdClientesAlfa,
    getTablaClientesAlfa,
    getProductoServicio, 
    getTablaProductoServicio,   
    loginAdminAlfa,
    loginEmpresas,
    getTablaClientes,
    // getEmpresa,
    getEmpresas,
    getCotizacionesTabla,
    getIdCotizacion,
    getClienteRFC  

    
    
    
}