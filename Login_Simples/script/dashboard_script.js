window.onload = function () {
    fetch('http://demo7535270.mockable.io/items').then(function (resp) {
        return resp.json()
    }).then(function (data) {

        // lib de grafico
        var chart = new CanvasJS.Chart("chartContainer", {
            // parametros do grafico
            animationEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title: {
                text: "Gastos Diários de Motores"
            },
            axisY: {
                title: "Gastos(R$)"
            },
            data: [{
                // colunas e valores
                type: "column",
                showInLegend: true,
                legendMarkerColor: "grey",
                legendText: "Motores",
                dataPoints: [
                    { y: 800, label: "default" },
                    { y: 800, label: "default" },
                    { y: 800, label: "default" },
                    { y: 800, label: "default" },
                    { y: 800, label: "default" }
                ]
            }]
        });

        // insere os dados do JSON no grafico
        var dps = chart.options.data[0].dataPoints;
        for (var i = 0; i < dps.length; i++) {
            // GAMBIARRA PURA
            dps[i] = { y: parseInt(data[i].gasto), label: data[i].engine }

        }
        chart.options.data[0].dataPoints = dps;
        chart.render();
    }).catch(function (error) {
        // erro de conxão
        alert(error)
    })
}