let n = 9

for (let x = 1; x <= n; x++){
    for (let y = 1; y <= n; y++){
        if (y + x == 10){
            document.write('+ ')
        }else {
            document.write('- ')
        }
    }
    document.write('<br>')
}