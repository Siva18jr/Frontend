let progress = document.querySelector('progress').value
const loadingValue = document.getElementById('loading-value')

const loading = () => {

    if(progress === 100){

        clearInterval(inter)

    }else{

        progress++

    }

    document.querySelector('progress').value = progress
    loadingValue.innerHTML = progress
    
}

const inter = setInterval(loading, 800)