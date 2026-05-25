const reqUrl = 'https://api.github.com/users/luvArora-01'
const button = document.querySelector('#getDetails')

button.addEventListener('click', function (e) {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', reqUrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            document.querySelector('#card').innerHTML = `
                <img src="${data.avatar_url}" alt="avatar">
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Link:</strong> <a href="${data.html_url}" target="_blank">My Profile</a></p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            `
        }
    }
    xhr.send()
})