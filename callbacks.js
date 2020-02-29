const fetchData = callback => {
  setTimeout(() => {
    callback('FetchData is Done')
  }, 1500)
}

setTimeout(() => {
  console.log(`Timer is done!`)
  fetchData(text => {
    console.log(text)
  })
}, 2000)