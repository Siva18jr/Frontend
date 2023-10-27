const formEv = document.querySelector('.form')

formEv.addEventListener('submit', e => {

    e.preventDefault();

    const formData = new FormData(formEv)
    const data = new URLSearchParams(formData)

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: data
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    });

});

const getApi = async () => {

    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {

            return res.json()

        }).then((data) => {

            console.log(data)

        }).catch((err) => {

            console.log(err)

        });

}