function init() {
  fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
  .then(res => res.json())
  .then(users => {
    const content = document.querySelector('#content')

    const usersTitle = document.createElement('h1')
    usersTitle.textContent = 'Users:'

    const usersList = document.createElement('ul')

    content.append(usersTitle, usersList)

    users.forEach(users => {

      const usersName = users.name
      const usersPostsCount = users.posts.length

      const usersItem = document.createElement('li')
      const usersLink = document.createElement('a')
      usersLink.textContent = `${usersName} (${usersPostsCount} posts)`
      usersLink.href = './user.html'

      usersList.append(usersItem)

      usersItem.append(usersLink)
    })
  })
}

init()