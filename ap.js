function loadContent(page) {
    var content = document.getElementById('content');
    content.innerHTML = ''; 

    
    switch(page) {
        case 'dashboard':
            content.innerHTML = '<h2>Dashboard</h2>';
            break;
        case 'user-management':
            
            window.location.href = 'us.html'; 
            break;
        case 'Settings':
            content.innerHTML = '<h2>Settings</h2>';
            break;
        case 'Ticket':
            window.location.href='Tr.html';
            break;
        
    }
}
