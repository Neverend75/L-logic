let n = 9

for (let x = 1; x <= n; x++){
    for (let y = 1; y<= n; y++){
        if (x + y == 10){
            document.write('&nbsp-&nbsp')
        }else if (x == y){
            document.write('&nbsp-&nbsp')
        }else {document.write('+ ')}
    }
    document.write('<br>')
} 