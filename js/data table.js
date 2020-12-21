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
    if($('.admin-user-table')){
        const table = $('.admin-user-table');
        table.DataTable({
            searching: false,
            ordering: false,
            select: false
        })
    };
    if($('.admin-transactions')){
        const table = $('.admin-transactions');
        table.DataTable({
            searching: false,
            ordering: false,
            select: false
        })
    };
    if($('.admin-products')){
        const table = $('.admin-products');
        table.DataTable({
            searching: false,
            ordering: false,
            select: false
        })
    };

})