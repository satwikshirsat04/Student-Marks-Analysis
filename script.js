document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    

    const name = document.getElementById('name').value;
    const webTech = Number(document.getElementById('webTech').value);
    const dbms = Number(document.getElementById('dbms').value);
    const hci = Number(document.getElementById('hci').value);
    const ai = Number(document.getElementById('ai').value);

    const totalMarks = webTech + dbms + hci + ai;
    const percentage = totalMarks / 4;

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>${name}</strong>, your marks are:<br>
        Web Technology: <strong>${webTech}</strong><br>
        DBMS: <strong>${dbms}</strong><br>
        HCI: <strong>${hci}</strong><br>
        Artificial Intelligence: <strong>${ai}</strong><br>
        <strong>Total Marks:</strong> ${totalMarks}<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}
    `;

    // Prepare data for the graph
    const marks = [webTech, dbms, hci, ai];
    const subjects = ['Web Technology', 'DBMS', 'HCI', 'Artificial Intelligence'];

    // Display the graph
    const ctx = document.getElementById('marksChart').getContext('2d');
    const marksChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [{
                label: 'Marks Obtained',
                data: marks,
                backgroundColor: [
                    'rgba(255, 99, 132,1)', 
                    'rgba(54, 162, 235,1)', 
                    'rgba(255, 206, 86,1)', 
                    'rgba(75, 192, 192,1)' 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', 
                    'rgba(54, 162, 235, 1)', 
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Marks'
                    }
                }
            }
        }
    });

    // Show the graph container
    document.getElementById('graphContainer').style.display = 'block';
});