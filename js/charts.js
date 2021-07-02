

// Era pra ter um gráfico, mas não consegui =/
// Mas a ideia era ter uma dash com gráficos dinâmicos, não da forma como está ;)

let myChart = document.getElementById('myChart').getContext('2d')

let massPopChart = new Chart(myChart, {
    type: 'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'May', 'Apr', 'Jun'],
        datasets:[
        {
            label:'Peso Perdido',
            data:[
                120,
                110,
                105,
                115,
                97,
                100
            ],
            backgroundColor:'rgba(160, 241, 245, 1)',
            borderColor: 'rgba(160, 241, 245, 1)'
        },
        {
            label:'Peso Ganho',
            data:[
                98,
                105,
                115,
                101,
                109,
                98
            ],
            backgroundColor: 'rgba(252, 131, 131, 1)',
            borderColor: 'rgba(252, 131, 131, 1)'
        }
    ]
    },
});


let secondChart = document.getElementById('secondChart').getContext('2d')

let anotherChart = new Chart(secondChart, {
    type: 'pie',
    data:{
        labels:['Meta do Dia', 'Kcal Perdidas'],
        datasets:[
        {
            label:'Peso Perdido',
            data:[
                44.12,
                100,
            ],
            backgroundColor:['rgba(160, 241, 245, 1)', 'rgba(245, 160, 160, 1)']
        },
    ]
    },
});

