
const users = ["Enzo", "Aurélien", "Yves", "Thibault", '<img src=x onerror="alert(\'oupsi\')">']

const clicked = () => {
    const body = document.querySelector('body')

    for (const user of users) {
        const div = document.createElement('div')
        div.innerHTML = user
        body.appendChild(div)
    }

}


document.querySelector('#boutton').addEventListener('click', clicked)


