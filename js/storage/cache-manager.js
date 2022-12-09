'use strict'

function CacheManager(cacheName) {

    function openCache() {
        return (async function() {
            const cache = await caches.open(cacheName)
            return cache
        })()
    }

    this.findItem = async function(requestURL, mimeType = 'application/json') {

        const validProtocols = ['https', 'http']
        const isSomeInvalid = validProtocols.some(protocol => requestURL.startsWith(protocol))

        if(!isSomeInvalid) {
            throw new Error(`The requestURL is not a valid protocol. Use ${validProtocols}`)
        }

        const requestURLSplitted = requestURL.split('/')

        const reqObj = new Request(requestURL, {
            headers: {
                'Content-Type': mimeType,
            },
            mode: 'same-origin'
        })

        const cache = await openCache()
        const match = await cache.match(reqObj)
     
        if(typeof match === 'undefined') {
            console.log(`The item "${requestURLSplitted[requestURLSplitted.length - 1]}" does not exist into cache "${cacheName}"`)
            return
        }
    }
}

// const c = new CacheManager('c')
// c.findItem(`https://${window.origin}/languages.json`)

// const a = new CacheManager('e')
// a.findItem('Hello ')