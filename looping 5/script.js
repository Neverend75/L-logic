let n = 9

for (let x = 1; x <= n; x++){
    for (let y = 1; y<= n; y++){
        if (y % 2 == 0){
            document.write('- ')
        }else {document.write('+ ')}
    }
    document.write('<br>')
} 