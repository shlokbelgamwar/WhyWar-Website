const copyButton = document.querySelector('#copy-credit');
const status = document.querySelector('#copy-status');
const credit = 'Shlok Belgamwar. Why War. Rough VR narrative concept and early prototype, 2026. https://why-war-shlok-belgamwar.snugscout18.chatgpt.site/';
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(credit);
    status.textContent = 'Credit copied.';
  } catch {
    status.textContent = 'Select the credit below to copy it.';
    document.querySelector('#citation-text').textContent = credit;
  }
});
