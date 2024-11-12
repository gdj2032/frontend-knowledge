const CHUNK_SIZE = 5 * 1024 * 1024; // 每块大小 5M

function uploadFile() {
  const file = document.getElementById('fileInput').files[0];
  if (!file) return;

  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
  let currentChunk = 0;

  function uploadChunk() {
    if (currentChunk >= totalChunks) return console.info('--- upload complete ---');
    const start = currentChunk * CHUNK_SIZE;
    const end = (currentChunk + 1) * CHUNK_SIZE;
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('chunkNumber', currentChunk);
    formData.append('totalChunks', totalChunks);
    formData.append('id', 1);

    // 上传文件
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (res.ok) {
          currentChunk++;
          uploadChunk();
        } else {
          console.info('--- upload failed ---');
        }
      })
      .catch(err => {
        console.info('--- upload error ---', err);
      });
  }

  uploadChunk();
}
