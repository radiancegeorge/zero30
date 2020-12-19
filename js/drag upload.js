FileList.prototype.forEach = Array.prototype.forEach;
FileList.prototype.indexOf = Array.prototype.indexOf;
window.addEventListener('load', e=>{
    let events = 'drag dragstart dragend dragover dragenter dragleave drop';
    events = events.split(' ');
    const uploadContainer = document.querySelector('.drop-files');

    events.forEach(event =>{
        uploadContainer.addEventListener(event, async e=>{
            e.preventDefault();
            const files =  e.dataTransfer.files.length >= 1 && e.dataTransfer.files;
            if(files){
                const allowedFiles = new Promise((resolve, reject)=>{
                    const allowedFiles = [];
                    files.forEach(file =>{
                        const type = file.type.split('/')[1];
                        // console.log(type)
                        
                        type === 'png' || type === 'jpeg' ? allowedFiles.push(file) : null ;
                        files.indexOf(file) === (files.length - 1) && resolve(allowedFiles);
                    });
                    // console.log(allowedFiles)
                });
                const selectedFiles = await allowedFiles;

                //can do what you want with the files in selectedFiles array cheers!!
                // console.log(selectedFiles);
            }
        })
    })
    
})