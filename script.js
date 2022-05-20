//targeting the button
const button = document.getElementById('button')
const videoElement = document.getElementById('video')

async function selectMediaStream() {
  try {
    //connect to api here
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {videoElement.play()}
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
  }
}
selectMediaStream()

button.addEventListener('click', async () => {
  button.displayed = true
  await videoElement.requestPictureInPicture()
  button.displayed = false
})