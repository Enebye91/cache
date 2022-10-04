const cacheName = "cache-students";
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(["/students/", 
                                 "/students/index.html",
                                 "/students/mystyle.css",
                                 "/students/javascript.js",
                                 "/students/members.json",
                                "/students/morten.png", 
                                "/students/nina.png", 
                                "/students/olivia.png", 
                             
                                "/members/firstname", 
                                "/members/lastname",  
                                "/members/age"])
        })
    )
})

self.addEventListener("fetch", function(event) {
    event.responWith(
        fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache=>cache.match(event.request))
        )
    )
})  