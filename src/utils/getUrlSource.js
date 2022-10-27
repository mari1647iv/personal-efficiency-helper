export default function getUrlSource(url) {
  let src = url.replace('https://', '').replace('http://','').replace('www.', '').split('/')[0]
  return src
}