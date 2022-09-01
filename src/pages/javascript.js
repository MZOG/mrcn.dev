import React from "react"

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done")
  }, 1000)
})

promise.then(result => {
  console.log(result)
})

const JS = () => {
  return (
    <>
      <p>heheszki</p>
    </>
  )
}

export default JS
