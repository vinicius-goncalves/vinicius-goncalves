"use strict";
// 'use strict'
// export { CacheManager }
// var instances = 1
// function CacheManager(cacheName = 'general') {
//     CacheManager.instances = CacheManager.instances + 1 || 1
//     function openCache() {
//         return (async function() {
//             const cache = await caches.open(cacheName)
//             return cache
//         })()
//     }
//     function verifyProtocol(requestURL) {
//         try {
//             const validProtocols = ['http://', 'https://']
//             const areSomeValid = validProtocols.some(protocol => requestURL.startsWith(protocol))
//             if(!areSomeValid) {
//                 const errorMessage =`The ${requestURL} does not use a valid protocol or it is incorrect. Use ${validProtocols.join('/')}.`
//                 throw console.error(errorMessage)
//             }
//             return { valid: true }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     this.findItem = async function(requestURL, mimeType = 'application/json') {
//        verifyProtocol(requestURL)
//         const reqObj = new Request(requestURL, {
//             headers: {
//                 'Content-Type': mimeType,
//             },
//             mode: 'same-origin'
//         })
//         const cache = await openCache()
//         const match = await cache.match(reqObj)
//         const requestURLSplitted = requestURL.split('/')
//         if(typeof match === 'undefined') {
//             const informationMessage = `The item "${requestURLSplitted[requestURLSplitted.length - 1]}" does not exist into cache "${cacheName}"`
//             return { exists: false, msg: informationMessage }
//         }
//         return { exists: true, result: (await match.json()) }
//     }
//     this.putItem = async function(URLWithItems, mimeType) {
//         verifyProtocol(URLWithItems)
//         const responseFromURL = await fetch(URLWithItems)
//         if(!responseFromURL.ok) {
//             const messageError = `An error has occurred when tried to get the items from ${URLWithItems}.`
//             const statusCode = (statusCode) => ({
//                 '404': `[${statusCode}] The error means the request did not find the URL. Verify if the request URL is correct.`
//             })[statusCode]
//             throw console.error(messageError, statusCode(responseFromURL.status))
//         }
//         const cache = await openCache()
//         const bodyToSerialize = JSON.stringify((await responseFromURL.json()))
//         const request = new Request(URLWithItems, {
//             headers: {
//                 'Content-Type': mimeType
//             }
//         })
//         const itemsResponse = new Response(bodyToSerialize, {
//             headers: {
//                 'Content-Type': mimeType
//             }
//         })
//         try {
//             await cache.put(request, itemsResponse)
//             console.log(`The items from ${URLWithItems} were added into ${cacheName}`)
//         } catch (error) {
//             throw console.error(`It was not possible to add the items from ${URLWithItems} into \"${cacheName}\" cache. Verify if the URL is correct and try again.`)
//         }
//     }
//     this.deleteCache = async function(requestURL, mimeType) {
//         verifyProtocol(requestURL)
//         const cache = await openCache()
//         const request = new Request(requestURL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': mimeType
//             }
//         })
//         try {
//             await cache.delete(requestURL)
//             console.log('Deleted')
//         } catch (error) {
//             throw console.log(error)
//         }
//     }
// }
