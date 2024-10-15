
  const linhaLuminosidade = document.getElementById('luminosidadeLinha');
  const barraLuminosidade = document.getElementById('luminosidadeBarra');

  const linhaEtileno = document.getElementById('etilenoLinha');
  const barraEtileno = document.getElementById('etilenoBarra');

  new Chart(linhaLuminosidade, {
    type: 'line', 
    data: {
        labels: ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15'], 
        datasets: [{
            label: 'Luminosidade', 
            data: [500, 600 , 610, 850, 700, 680, 640],
            borderColor: '#B81476', 
            backgroundColor: '#B81476',
            borderWidth: 2 
        }]
    },
    options: {
        responsive: true, 
    }
});

  new Chart(barraLuminosidade, {
    type: 'bar', 
    data: {
        labels: ['06/10', '07/10', '08/10', '09/10', '10/10', '11/10'], 
        datasets: [{
            label: 'Luminosidade', 
            data: [630, 640 , 710, 680, 660, 680, 730],
            borderColor: '#B81476', 
            backgroundColor: '#B81476',
        }]
    },
    options: {
        responsive: true, 
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
});


new Chart(linhaEtileno, {
    type: 'line', 
    data: {
        labels: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00'], 
        datasets: [{
            label: 'Etileno', 
            data: [230, 239 , 330, 320, 335, 320],
            borderColor: '#B81476', 
            backgroundColor: '#B81476',
            borderWidth: 2 
        }]
    },
    options: {
        responsive: true, 
    }
});

  new Chart(barraEtileno, {
    type: 'bar', 
    data: {
        labels: ['06/10', '07/10', '08/10', '09/10', '10/10', '11/10'], 
        datasets: [{
            label: 'Etileno', 
            data: [230, 240 , 243, 280, 300, 300],
            borderColor: '#B81476', 
            backgroundColor: '#B81476',
        }]
    },
    options: {
        responsive: true, 
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
});



