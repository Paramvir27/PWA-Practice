// INSTALL Event
self.addEventListener("install", (event) => {
  console.log("SW Successfully Installed", event)
})

// ACTIVATE Event 
self.addEventListener("activate", (event) => {
  console.log("SW Successfully Activated", event)
})

// FETCH Event 
self.addEventListener("fetch", (event) => {
  console.log("SW Successfully Listened Fetch Req. =>", event)
})

