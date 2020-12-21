const ctx = document.querySelector('.wrap-chart canvas').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '',//asign a label in here
            data: [
                0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            borderWidth: 1,
        }]
        
    }       
})