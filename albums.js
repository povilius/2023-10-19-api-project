function init() {
  fetch('https://jsonplaceholder.typicode.com/albums?_limit=15&_embed=photos&_expand=user')
    .then(res => res.json())
    .then(albums => {

      const content = document.querySelector('#content')
      
      const albumsTitle = document.createElement('h1')
      albumsTitle.textContent = 'Albums:'

      const albumsList = document.createElement('ul')

      content.append(albumsTitle, albumsList)

      albums.forEach(album => {
        const albumsName = album.title
        const albumsPicCount = album.photos.length
        const albumsUser = album.user.name

        const albumsItem = document.createElement('li')
        const albumsPic = document.createElement('img')
        albumsPic.src = album.photos[0].url
        const albumsLink = document.createElement('a')
        albumsLink.textContent = `${albumsUser}: ${albumsName} (${albumsPicCount})`
        albumsLink.href = './album.html'

        albumsList.append(albumsItem)

        albumsLink.append(albumsPic)

        albumsItem.append(albumsLink)
      })
  })
}

init()