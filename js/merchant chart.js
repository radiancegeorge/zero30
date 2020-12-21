const ctx = document.querySelector('.wrap-chart canvas').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '',//asign a label in here
            data: [
                0, 10000, 20000, 30000, 40000, 10000, 60000, 70000, 20000, 90000, 100000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            backgroundColor: 'transparent',
            lineColor: 'red',
            borderWidth: 4,
        },{
            label: '',//asign a label in here
            data: [
                0, 1000, 20000, 60000, 50000, 10000, 60000, 7000, 20000, 7100, 10000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            backgroundColor: 'transparent',
            borderWidth: 4,
        
        },{
            label: '',//asign a label in here
            data: [
                0, 10000, 20000, 30000, 10000, 10000, 60000, 70000, 20000, 70000, 10000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            backgroundColor: 'transparent',
            borderWidth: 4,
        
        },{
            label: '',//asign a label in here
            data: [
                8000, 10000, 20000, 30000, 4000, 10000, 60000, 4000, 20000, 70000, 10000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            backgroundColor: 'transparent',
            borderWidth: 4,
        
        },{
            label: '',//asign a label in here
            data: [
                0, 10000, 20000, 30000, 8000, 10000, 60000, 7000, 20000
            ],
            borderColor:[
                '#E31A1C',
                '#1F78B4',
                '#33A02C',
                '#FB9A99',
                '#B2DF8A',
                '#A6CEE3'
            ],
            backgroundColor: 'transparent',
            borderWidth: 4,
        
        }]
        
    }       
})