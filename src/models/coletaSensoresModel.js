var database = require("../database/config")


function coletaSensor(idEstufa) {
    var instrucaoSql = `
        SELECT *
        FROM (
            SELECT 
                valorEtileno as Etileno,
                time(dataColetaEtileno) as DataColeta,
                valorLuminosidade as Luminosidade
            FROM 
                MedidaSensor 
            WHERE 
                fkEstufa = ${idEstufa}
            ORDER BY 
                idMedidaSensor DESC 
            LIMIT 5
        ) as subquery
        ORDER BY 
            DataColeta ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaKpiMaxEtileno(idEstufa) {
    var instrucaoSql = `
    select valorEtileno as Etileno,
    time(dataColetaEtileno) as DataColeta
    from MedidaSensor where fkEstufa = ${idEstufa} order by valorEtileno desc limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function coletaKpiMinEtileno(idEstufa) {
    var instrucaoSql = `
    select valorEtileno as Etileno,
    time(dataColetaEtileno) as DataColeta
    from MedidaSensor where fkEstufa = ${idEstufa} order by valorEtileno limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaKpiMaxLuminosidade(idEstufa) {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade,
    time(dataColetaLuminosidade) as DataColeta
    from MedidaSensor where fkEstufa = ${idEstufa} order by valorLuminosidade desc limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaKpiMinLuminosidade(idEstufa) {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade,
    time(dataColetaLuminosidade) as DataColeta
    from MedidaSensor where fkEstufa = ${idEstufa} order by valorLuminosidade limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirNovaEstufa(maxEtileno, minEtileno, maxLuminosidade, minLuminosidade, fkEmpresa, perfilCliente){
    var instrucaoSql=`
    insert into Estufa (maxEtileno, minEtileno, maxLuminosidade, minLuminosidade, fkEmpresa, perfilCliente) values  ('${maxEtileno}', '${minEtileno}', '${maxLuminosidade}', '${minLuminosidade}', '${fkEmpresa}', '${perfilCliente}')`

    return database.executar(instrucaoSql);
}

function atualizarEstufa(idEstufa, maxEtileno, minEtileno, maxLuminosidade, minLuminosidade){
    var instrucaoSql=`
    update Estufa set maxEtileno = ${maxEtileno}, minEtileno = ${minEtileno}, maxLuminosidade = ${maxLuminosidade}, minLuminosidade = ${minLuminosidade}  where idEstufa = ${idEstufa}`
    return database.executar(instrucaoSql);
}


function valorMaximoLuminosidadeEstufa(fkEstufa) {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade
    from MedidaSensor where fkEstufa = ${fkEstufa} order by valorLuminosidade desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function valorMinimoLuminosidadeEstufa(fkEstufa) {
    var instrucaoSql = `
    select valorLuminosidade as Luminosidade
    from MedidaSensor where fkEstufa = ${fkEstufa} order by valorLuminosidade limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function valorMaximoEtilenoEstufa(fkEstufa) {
    var instrucaoSql = `
    select valorEtileno as Etileno
    from MedidaSensor where fkEstufa = ${fkEstufa} order by valorEtileno desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function valorMinimoEtilenoEstufa(fkEstufa) {
    var instrucaoSql = `
    select valorEtileno as Etileno
    from MedidaSensor where fkEstufa = ${fkEstufa} order by valorEtileno limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function pegarQuantidadeEstufas(fkEmpresa) {
    var instrucaoSql = `
    SELECT count(idEstufa)
    FROM Estufa
    WHERE fkEmpresa = ${fkEmpresa}
    GROUP BY fkEmpresa;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function pegarIdsEstufas(fkEmpresa) {
    var instrucaoSql = `
    SELECT idEstufa as idEstufa
    FROM Estufa
    WHERE fkEmpresa = '${fkEmpresa}'
    GROUP BY idEstufa;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarMetricasEstufa(idEstufa) {
    var instrucaoSql = `
    SELECT maxEtileno, maxLuminosidade, minEtileno, minLuminosidade, perfilCliente
    FROM Estufa
    WHERE idEstufa = '${idEstufa}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletaSensor,
    coletaKpiMaxEtileno,
    coletaKpiMinEtileno,
    coletaKpiMaxLuminosidade,
    coletaKpiMinLuminosidade,
    inserirNovaEstufa,
    atualizarEstufa,
    pegarMetricasEstufa,
    pegarIdsEstufas,
    pegarQuantidadeEstufas,
    valorMaximoEtilenoEstufa,
    valorMinimoEtilenoEstufa,
    valorMaximoLuminosidadeEstufa,
    valorMinimoLuminosidadeEstufa
};


