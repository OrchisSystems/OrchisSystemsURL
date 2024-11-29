var database = require("../database/config")


function coletaSensor() {
    var instrucaoSql = `
        select valorEtileno as Etileno,
        time(dataColetaEtileno) as DataColeta,
        valorLuminosidade as Luminosidade
        from MedidaSensor;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function coletaKpiMaxEtileno() {
    var instrucaoSql = `
    select valorEtileno as Etileno,
    time(dataColetaEtileno) as DataColeta
    from MedidaSensor order by valorEtileno desc limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function coletaKpiMinEtileno() {
    var instrucaoSql = `
    select valorEtileno as Etileno,
    time(dataColetaEtileno) as DataColeta
    from MedidaSensor order by valorEtileno limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaKpiMaxLuminosidade() {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade,
    time(dataColetaLuminosidade) as DataColeta
    from MedidaSensor order by valorLuminosidade desc limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function coletaKpiMinLuminosidade() {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade,
    time(dataColetaLuminosidade) as DataColeta
    from MedidaSensor order by valorLuminosidade limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirNovaEstufa(maxEtileno, minEtileno, maxLuminosidade, minLuminosidade, fkEmpresa){
    var instrucaoSql=`
    insert into Estufa (maxEtileno, minEtileno, maxLuminosidade, minLuminosidade, fkEmpresa) values  ('${maxEtileno}', '${minEtileno}', '${maxLuminosidade}', '${minLuminosidade}', '${fkEmpresa}')`

    return database.executar(instrucaoSql);
}

function atualizarEstufa(idEstufa, maxEtileno, minEtileno, maxLuminosidade, minLuminosidade){
    var instrucaoSql=`
    update Estufa set maxEtileno = ${maxEtileno}, minEtileno = ${minEtileno}, maxLuminosidade = ${maxLuminosidade}, minLuminosidade = ${minLuminosidade}  where idEstufa = ${idEstufa}`
    return database.executar(instrucaoSql);
}


module.exports = {
    coletaSensor,
    coletaKpiMaxEtileno,
    coletaKpiMinEtileno,
    coletaKpiMaxLuminosidade,
    coletaKpiMinLuminosidade,
    inserirNovaEstufa,
    atualizarEstufa
};


