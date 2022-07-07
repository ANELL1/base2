const actions = require('../actions/userActions')

    const signupAlfa=(_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    return actions.signupAlfa(variable)
        }

    const signupEmpresas=(_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    return actions.signupEmpresas(variable)
        }

    const insertCotizaciones = (_,data) =>{
        var cadena = data.data[0]
        var variable = cadena.split(",")
    return actions.insertCotizaciones(variable)
        }
  

    const insertClientes = (_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    return actions.insertClientes(variable)
        }

    const deleteCliente  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.deleteCliente(variable)
    
    }
    // const updateCliente =  (_ , data) =>{
    //     var cadena= data.data[0]
    //     var variable = cadena.split(",")
    //     return actions.updateCliente  (variable)    
    // }
 
    const insertContacto = (_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")      
    return actions.insertContacto(variable)
        }

    const insertProductoServicio = (_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",") 
        return actions.insertProductoServicio(variable)
        }

    const insertClientesAlfa = (_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    return actions.insertClientesAlfa(variable)
        }

    const sendEmailCotizacion =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")   
        return actions.SendEmailCotizacion(variable)
    }

    const insertTotales =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")   
        return actions.insertTotales(variable)
    }

    const updateStatusCotizacion =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")   
        return actions.UpdateStatusCotizacion(variable)
    }

    const updateContacto =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.updateContacto(variable)
    }

    const deliteContacto  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")       
        return actions.deliteContacto(variable)    
    }

    const cotizacionVencida  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.CotizacionVencida(variable)    
    }
    const accesoSistema  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.AccesoSistema(variable)    
    }
    const transactionClientes  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.TransactionClientes(variable)    
    }
    const updatePasswordCliente  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.UpdatePasswordCliente(variable)    
    }
    const quitarAccesoSistema  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.QuitarAccesoSistema(variable)    
    }
    const registerSupport  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.RegisterSupport(variable)    
    }
    const insertURLVideos  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")      
        return actions.insertURLVideos(variable)    
    }
    // const insertVenta  =  (_ , data) =>{
    //     var cadena= data.data[0]
    //     var variable = cadena.split(",")
    //     // console.log("estos es variable", variable)
    //     return actions.insertVenta(variable)    
    // }

    const ventas  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        // console.log("estos es variable", variable)
        return actions.ventas(variable)    
    }

    const insertTotalesVenta =(_ , data)=>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        // console.log("esto es variable",variable)
        return actions.insertTotalesVenta(variable)
    }
    const registerPoliza =(_ , data)=>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        // console.log("esto es variable",variable)
        return actions.RegisterPoliza(variable)
    }
    const activarPoliza =(_ , data)=>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        // console.log("esto es variable",variable)
        return actions.ActivarPoliza(variable)
    }
    const editarPoliza =(_ , data)=>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        // console.log("esto es variable",variable)
        return actions.EditarPoliza(variable)
    }   
    const updateInsertProductoServicio  =  (_ , data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.updateInsertProductoServicio(variable)    
    }
    const updateCliente =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.updateCliente(variable)
    }
    const polizaVencida  = (_,data) =>{
        var cadena = data.data[0]
        var variable = cadena.split(",")
        return actions.polizaVencida(variable)
    }
    const registerCupones =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.RegisterCupones(variable)
    }
    const updateCupones =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.UpdateCupones(variable)
    }
    const deleteCupones =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.DeleteCupones(variable)
    }
    const registerSolictudCotizacion =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.RegisterSolictudCotizacion(variable)
    }
    const sendMailSolicitudCotizacion =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.SendMailSolicitudCotizacion(variable)
    }
    const cancelSolicitud =  (_ ,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
        return actions.CancelSolicitud(variable)
    }

module.exports={
    cancelSolicitud,
    sendMailSolicitudCotizacion,
    registerSolictudCotizacion,
    deleteCupones,
    updateCupones,
    registerCupones,
    polizaVencida,
    updateCliente,
    updateInsertProductoServicio,
    // polizaVencida,
    editarPoliza,
    activarPoliza,
    registerPoliza,
    insertTotalesVenta,
    ventas,
    // insertVenta,
    registerSupport,
    insertURLVideos,
    quitarAccesoSistema,
    updatePasswordCliente,
    transactionClientes,
    accesoSistema,
    cotizacionVencida,
    deliteContacto,
    updateContacto,
    updateStatusCotizacion,
    insertTotales,
    sendEmailCotizacion,
    insertClientesAlfa,
    insertProductoServicio,
    insertContacto,
    // updateCliente,
    deleteCliente,
    signupAlfa,
    signupEmpresas,
    insertCotizaciones,
    insertClientes
}