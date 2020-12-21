window.addEventListener('load', e=>{
    if($('.ongoing-orders-table')){
        const table = $('.ongoing-orders-table');
        table.DataTable({
            searching: false,
            ordering: false,
            select: false
        })
    }
    if($('.pending-orders-table')){
        const table = $('.pending-orders-table');
        table.DataTable({
            searching: false,
            ordering: false,
            select: false
        })
    }
})