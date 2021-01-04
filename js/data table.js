window.addEventListener('load', e=>{
    if($('.ongoing-orders-table')){
        const table = $('.ongoing-orders-table');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    }
    if($('.pending-orders-table')){
        const table = $('.pending-orders-table');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    }
    if($('.admin-user-table')){
        const table = $('.admin-user-table');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.admin-transactions')){
        const table = $('.admin-transactions');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.admin-products')){
        const table = $('.admin-products');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.my-merchants')){
        const table = $('.my-merchants');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.manage-riders')){
        const table = $('.manage-riders');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.merchant-user-table')){
        const table = $('.merchant-user-table');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.merchant-products')){
        const table = $('.merchant-products');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };
    if($('.merchant-orders-table')){
        const table = $('.merchant-orders-table');
        table.DataTable({
            searching: true,
            ordering: true,
            select: true
        })
    };

})