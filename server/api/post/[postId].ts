export default defineEventHandler(async (event) => {
  const postId = event.context.params?.postId

  if (postId) {
    const apiKey = "AIzaSyAJCZnLQixhYykGIf5IoiK9g5iqzXaHjo0"
    const projectId = "goals-blog"
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/diary/${postId}?key=${apiKey}`
    const convertedResponse = await fetch(url).then(rawData => rawData.json())
    return convertedResponse
  }
})
